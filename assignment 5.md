---
title: USC Introduction to Logic
author: Gabriel Uzquiano
description: |
  assignment 5
base-css:
- https://static.carnap.io/css/tufte.css
- https://static.carnap.io/css/tuftextra.css
js:
- https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/js/pointTotal.js
---

Total Points: [pointsgohere]{.pointspan}

# basic language

## designators, predicates, and quantifier phrases

We have highlighted some expressions in the three sentences given below.

- [Spain]{.mark} is a European country.
- [Plato]{.mark} learned from [Socrates]{.mark}, but [he]{.mark} learned from no one else.
- [The Eiffel Tower]{.mark} is located somewhere near Paris.

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
1. To which category do the highlighted expressions belong?
|*designators
|predicates
|quantifier phrases
```

- Spain [is a European country]{.mark}.
- Plato [learned from]{.mark} Socrates, but he [learned from]{.mark} no one else.
- The Eiffel Tower [is located in]{.mark} somewhere [near Paris]{.mark}.

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
2. To which category do the highlighted expressions belong?
|designators
|*predicates
|quantifier phrases
```

- Spain is a European country
- Plato learned from Socrates, but he learned from [no one else]{.mark}.
- The Eiffel Tower is located [somewhere]{.mark} near Paris.

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
3. To which category do the highlighted expressions belong?
|designators
|predicates
|*quantifier phrases
```

## formulas 

Which of the expressions below are *atomic* formulas? Which are *formulas*? Which are *neither*? 

Since atomic formulas are formulas, some questions may have more than one correct answer.

$(\forall x Px \to \exists x Qx)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
4.
| atomic formula
|* formula
| neither
```



$QQxy$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
5.
|atomic formula
|formula
|*neither
```



$Pabxy$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
6.
|*atomic formula
|*formula
| neither
```



$(Xxa)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
7.
| atomic formula
| formula
|*neither
```

## free and bound variables

Which variables occur *free* in the following formulas?

$Qxay$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
8. 
|*x
|*y
|None
```



$\exists y (Px \ \to \ \exists x Ryx)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
9.
|*x
| y
|None
```



$(\forall x \forall y Rxy \ \vee \ \exists x Rxy)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
10.
| x
|*y
| None
```



$(\exists x Px \ \vee \ \forall y (Qy \ \wedge \ Rxyz))$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
11.
|*x
| y
|*z
| None
```

## open and closed formulas

Determine for each formula below whether it is open or closed.

$\forall x \forall y(Rxy \to (Px \wedge Qy))$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
12. 
|open
|*closed
```



$Pa \to \exists x \exists y (Rxy \to Sxyz)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
13.
|*open
|closed
```



$\forall x \forall y (Rxy \ \vee \ Ryx)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
14.
|open
|*closed
```



$\exists x \forall y (Px \ \wedge \ Raxy)$

```{.QualitativeProblem .MultipleSelection options="check" points=4 late-credit=3}
15.
|open
|*closed
```

# translation

Use the translation key given in order to translate from English into the language of quantificational logic. You should enter a formula of quantificational logic into the box. Remember to hit  **submit** to earn credit for your answers.

Use the following translation key for the next five problems:

> **translation key:**
>
> domain	:	people 
>
> $P \ \_$	:	__ is American
>
> $Q \ \_$	:	__ is a writer 
>
> $a$	:	Mark Twain
>

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
16.  Ax(Qx -> Px) /\ Ex(Px /\ ~Qx): Every writer is American but some Americans are not writers.

```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
17. Ex (Qx /\ Px) /\ (Qa /\ Pa): Some writers are American, and Mark Twain is both.

```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
18. Pa -> (Qa -> Ex (Px /\ Qx)) : If Mark Twain is American, then he is a writer only if some Americans are writers.
```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
19. ~Ax (Px -> Qx) : Not every American is a writer.
```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
20. Ex(Qx /\ Px) /\ Ex(Qx /\ ~Px) : Some writers are American and some writers are not.

```

Use the following translation key for the next five problems:

> **translation key:**
>
> domain	:	books 
>
> $P \ \_$	:	__ is a page-turner
>
> $Q \ \_$	:	__ is a novel 
>
> $a$	:	Moby Dick

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
21.  Pa /\ ~Ax(Qx -> Px): Moby Dick is a page-turner, but not every novel is.

```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
22. ~Ax (Qx -> Px) -> ~Pa: Moby Dick is not a page-turner, unless every novel is.

```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
23.  Ax(Px -> Qx) : Any page-turner is a novel. 
```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
24. ~Ex (Qx /\ Px) : No novel is a page-turner.
```

```{.Translate .FOL system="gamutND" options="check" points=4 late-credit=3}
25. ~Qa -> ~ Ex (Qx /\ Px) : No novel is a page-turner, unless Moby Dick is a novel.
```

