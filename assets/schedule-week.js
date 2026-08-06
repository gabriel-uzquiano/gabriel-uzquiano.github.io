/**
 * Highlights the rows of a course schedule table that fall in the current
 * Monday-to-Sunday week.
 *
 * This runs in the visitor's browser rather than at build time, so the
 * highlight is correct every day without the site needing to be rebuilt.
 *
 * Usage, at the bottom of a course page:
 *
 *   <script src="/assets/schedule-week.js" data-year="2026"></script>
 *
 * data-year is the calendar year the schedule's dates belong to. It is
 * optional: if omitted, the year is inferred. Set it when you update the
 * schedule each term and the guessing never has to happen.
 *
 * For checking how a future week will look, append ?date=YYYY-MM-DD to the
 * page URL to pretend today is that date.
 */
(function () {
  "use strict";

  var script = document.currentScript;

  // Midnight local time, so comparisons are whole days.
  function startOfDay(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  // Monday of the week containing d. getDay() is 0 for Sunday.
  function startOfWeek(d) {
    var day = d.getDay();
    var offsetToMonday = day === 0 ? -6 : 1 - day;
    var monday = startOfDay(d);
    monday.setDate(monday.getDate() + offsetToMonday);
    return monday;
  }

  function today() {
    var override = /[?&]date=(\d{4})-(\d{1,2})-(\d{1,2})/.exec(
      window.location.search
    );
    if (override) {
      return new Date(+override[1], +override[2] - 1, +override[3]);
    }
    return startOfDay(new Date());
  }

  // Pulls "8/24" out of a date cell such as "Mon 8/24".
  function parseMonthDay(text) {
    var match = /(\d{1,2})\s*\/\s*(\d{1,2})/.exec(text);
    if (!match) return null;
    var month = +match[1];
    var day = +match[2];
    if (month < 1 || month > 12 || day < 1 || day > 31) return null;
    return { month: month, day: day };
  }

  /**
   * Works out which calendar year the schedule belongs to: the candidate year
   * whose span of dates sits closest to now. Only used when data-year is absent.
   */
  function inferYear(monthDays, now) {
    var candidates = [now.getFullYear() - 1, now.getFullYear(), now.getFullYear() + 1];
    var best = now.getFullYear();
    var bestDistance = Infinity;

    candidates.forEach(function (year) {
      var distance = Math.min.apply(
        null,
        monthDays.map(function (md) {
          return Math.abs(new Date(year, md.month - 1, md.day) - now);
        })
      );
      if (distance < bestDistance) {
        bestDistance = distance;
        best = year;
      }
    });

    return best;
  }

  function highlight(table, now) {
    var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));

    // First pass: read the date out of each row's first cell.
    var parsed = rows.map(function (row) {
      var cell = row.cells && row.cells[0];
      return {
        row: row,
        monthDay: cell ? parseMonthDay(cell.textContent) : null
      };
    });

    var monthDays = parsed
      .filter(function (p) {
        return p.monthDay;
      })
      .map(function (p) {
        return p.monthDay;
      });

    if (!monthDays.length) return;

    var declaredYear = script && script.getAttribute("data-year");
    var year = declaredYear ? +declaredYear : inferYear(monthDays, now);

    var weekStart = startOfWeek(now);
    var weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7); // exclusive upper bound

    // Second pass: mark the rows inside this week.
    var marked = [];
    parsed.forEach(function (p) {
      if (!p.monthDay) return;
      var date = new Date(year, p.monthDay.month - 1, p.monthDay.day);
      if (date >= weekStart && date < weekEnd) {
        p.row.classList.add("this-week");
        marked.push(p.row);
      }
    });

    if (!marked.length) return;

    // Label only the first row of the run, so the marker appears once.
    marked[0].classList.add("this-week-start");

    // Announce it to screen readers, which cannot see the tint.
    var label = document.createElement("span");
    label.className = "this-week-label";
    label.textContent = "This week: ";
    var firstCell = marked[0].cells[0];
    if (firstCell) firstCell.insertBefore(label, firstCell.firstChild);
  }

  function run() {
    var tables = document.querySelectorAll(".post-content table");
    var now = today();
    Array.prototype.forEach.call(tables, function (table) {
      highlight(table, now);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
