---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
<script>
  const password = "MHP102";
  const userInput = prompt("Enter password to view this page:");
   if (userInput !== password) {
    document.body.innerHTML = "<h2>access denied</h2>";
  }
</script>

## problems


### propositional logic: syntax and semantics

1. Call a formula $$\varphi$$ of propositional logic *positive* if, and only if, there are no occurrences of negation $$\neg$$ in $$\varphi$$. Justify each of the following claims:&nbsp;

   1. Every positive formula has an odd number of symbols.

      There are two ways to proceed.

      One is to carry out an induction on the complexity of formulas in order to argue that every formula $$\varphi$$  satisfies the condition:

      *if $$\varphi$$ is positive, then $$\varphi$$ has an odd number of symbols*.

      Alternatively, one can rely on a recursive definition of *positive* formula as follows:<br/>

      
      $$
      \varphi^+ ::= AT \ | \ (\varphi^+ \to \psi^+)
      $$
      <br/>

      That is:

      All atoms are *positive formulas*

      If $$\varphi^+$$ and $$\psi^+$$ are *positive formulas*, then $$(\varphi^+ \to \psi^+)$$ is a *positive formula*

      Nothing else is a *positive formula*

      We now carry out an induction on the complexity of *positive* formulas:

      **Base Case** An atom has length 1, which is odd.

      **Inductive Step for** $$\to$$ Let $$\varphi^+$$ be a formula of the form $$(\psi^+ \to \chi^+)$$ where both $$\psi^+$$ and $$\chi^+$$ come with an odd number of symbols. Then the number of symbols of $$\varphi^+$$ is the sum of the number of symbols of $$\psi^+$$, which is odd, and the number of symbols of $$\chi^+$$, which is odd too, plus three, one for each parenthesis and one for $$\to$$. Since the sum of two odd numbers is even, the number of symbols of $$\varphi^+$$ is the sum of an even number and three, which must be odd.

   2. Every positive formula is satisfiable.&nbsp;

      We can show something even stronger, namely, there is a single valuation $$V$$ satisfying *every* positive formula.

      Let $$V$$ be a valuation based on an assignment $$v$$ mapping every propositional variable to $$1$$. We use an induction on the complexity of *positive* formulas to show that $$V$$ satisfies every positive formula:

      **Base Case** $$V$$ maps every atom into $$1$$.

      **Inductive Step for** $$\to$$ Let $$\varphi^+$$ be a formula of the form $$(\psi^+ \to \chi^+)$$ where both $$V(\psi^+) = 1$$ and $$V(\chi^+) = 1$$. By definition of valuation, $$V(\varphi^+) = 1$$.

      We have shown that the set of positive formulas is satisfiable, which is in fact *stronger* than the claim that every positive formula is satisfiable.
      
      

2. True or false? If true, please provide an argument. If false, provide a counterexample.&nbsp;

   1. Given a set of formulas $$\Gamma$$ and two formulas $$\varphi$$ and $$\psi$$, 

      if $$\Gamma \not \models \varphi$$ or $$\Gamma \models \psi$$, then $$\Gamma \models \varphi \to \psi$$.

      *False*. Let $$\Gamma$$ be the empty set $$\emptyset$$, and let $$\varphi$$ and $$\psi$$ be two atoms $$p$$ and $$q$$ respectively. Note that $$\emptyset \not \models p \to q$$ even though $$\emptyset \not \models p$$.

   2. Given a set of formulas $$\Gamma$$ and two formulas $$\varphi$$ and $$\psi$$, 

      if $$\Gamma \models \varphi \to \psi$$, then $$\Gamma \not \models \varphi$$ or $$\Gamma \models \psi$$.&nbsp;
      
      *True*. We argue for the contrapositive:
      
      if it is *not* the case that $$\Gamma \not \models \varphi$$ or $$\Gamma \models \psi$$, then $$\Gamma \not \models \varphi \to \psi$$,
      
      or, equivalently,
      
      if  $$\Gamma \models \varphi$$ and $$\Gamma \not \models \psi$$, then $$\Gamma \not \models \varphi \to \psi$$.
      
      For suppose $$\Gamma \models \varphi$$ and $$\Gamma \not \models \psi$$. It follows that there is a valuation $$V$$ that satisfies *every* member of $$\Gamma$$ but fails to satisfy $$\psi$$. Since $$\Gamma \models \varphi$$, we know that  $$V$$ satisfies $$\varphi$$. So, $$V$$ satisfies every member of $$\Gamma$$, but $$V$$ does *not* satisfy $$\varphi \to \psi$$. We conclude that $$\Gamma \not \models \varphi \to \psi$$.
      
      

3. Show that for every natural number $$n > 1$$, there is a set $$\Gamma$$ of exactly $$n$$ formulas such that&nbsp;

   1. $$\Gamma$$ is unsatisfiable, but

      

   2. Every subset $$\Delta \subseteq \Gamma$$ with fewer than $$n$$ formulas is satisfiable.&nbsp;
   
   
   
   True. Given a natural number $$n > 1$$, let $$p_1, \dots , p_{n-1}$$ be an enumeration of $$n -1$$ atoms, and let
   $$
   \Gamma = \{p_1, \cdots , p_{n-1}, \neg (p_1 \wedge \cdots  \wedge p_{n-1})\}
   $$
   We now check that $$\Gamma$$ meets the two constraints specified above:
   
   1. $$\Gamma$$ is unsatisfiable
   
      If $$V$$ is a valuation satisfying the first $$n-1$$ atoms, then $$V$$ will not satisfy the negation of their conjunction.
   
   2. Every subset $$\Delta \subseteq \Gamma$$ with fewer than $$n$$ formulas is satisfiable.
   
      Let $$\Delta$$ be a proper subset of $$\Gamma$$ with strictly fewer than $$n$$ formulas. Then $$\Delta$$ will either omit an atom or a negation from $$\Gamma$$. Consider a valuation $$V$$, which maps *all, and only* atoms in $$\Delta$$ to $$1$$. Now, 
   
      if $$\Delta$$ omits an atom from $$\Gamma$$, then $$V$$ will verify every atom in $$\Delta$$ and the negation of the conjunction  $$\neg (p_1 \wedge \cdots  \wedge p_{n-1})$$ whether or not it is in $$\Delta$$.
   
      if $$\Delta$$ omits the negation $$\neg (p_1 \wedge \cdots  \wedge p_{n-1})$$, then $$V$$ will verify every formula in $$\Delta$$.

