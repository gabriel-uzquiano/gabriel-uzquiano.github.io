---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
## problems

### sets and relations

1. Find a relation $$R$$ on the set of English words $$W$$ with each of the profiles given below:&nbsp;

   1. irreflexive, asymmetric, and transitive on $$W$$.

   2. reflexive and euclidean on $$W$$.

   3. irreflexive, symmetric, and intransitive on $$W$$.&nbsp;

      

   Please justify your answers.&nbsp;&nbsp;

2. Justify each of the claims given below:&nbsp;

   1. A relation $$R$$ is symmetric and transitive on a set $$A$$ if, and only if, $$R$$ is euclidean on $$A$$.

      

   2. If a relation $$R$$ is both reflexive and euclidean on a set $$A$$, then $$R$$ is symmetric on $$A$$.

      

   3. $$R$$ is an equivalence relation on a set $$A$$ if, and only if, $$R$$ is reflexive and euclidean on $$A$$.&nbsp;

3. True or false? If true, please provide an argument. If false, provide a counterexample.

   1. The empty set $$\emptyset$$ is a binary relation.

      

   2. If a binary relation $$R$$ on a set $$A$$ is reflexive, symmetric, and connected on $$A$$, then $$R$$ is euclidean on $$A$$.

      

   3. If a binary relation $$R$$ on a set $$A$$  is euclidean and connected on $$A$$, then $$R$$ is either reflexive or symmetric on $$A$$.&nbsp;
   
4. 


### propositional logic: syntax and semantics

1. Call a formula $$\varphi$$ of propositional logic *positive* if, and only if, there are no occurrences of negation $$\neg$$ in $$\varphi$$. Justify each of the following claims:&nbsp;

   1. Every positive formula has an odd number of symbols.

   2. Every positive formula is satisfiable.&nbsp;

      

2. True or false? If true, please provide an argument. If false, provide a counterexample.&nbsp;

   1. Given a set of formulas $$\Gamma$$ and two formulas $$\varphi$$ and $$\psi$$, 

      if $$\Gamma \not \models \varphi$$ or $$\Gamma \models \psi$$, then $$\Gamma \models \varphi \to \psi$$.

   2. Given a set of formulas $$\Gamma$$ and two formulas $$\varphi$$ and $$\psi$$, 

      if $$\Gamma \models \varphi \to \psi$$, then $$\Gamma \not \models \varphi$$ or $$\Gamma \models \psi$$.&nbsp;

3. Show that for every natural number $$n > 1$$, there is a set $$\Gamma$$ of exactly $$n$$ formulas such that&nbsp;

   1. $$\Gamma$$ is unsatisfiable, but

      

   2. Every subset $$\Delta \subseteq \Gamma$$ with fewer than $$n$$ formulas is satisfiable.&nbsp;

### propositional logic: axiomatic derivations

1. Show that the deductive system we have introduced is *sound*: a formula $$\varphi$$ is provable from a set of formulas $$\Gamma$$ only if $$\varphi$$ is a logical consequence of $$\Gamma$$. That is, if $$\Gamma \vdash \varphi$$, then $$\Gamma \models \varphi$$. &nbsp;

   Hint: Use complete induction  (without a base case) to argue that for every $$n$$, if $$\langle \chi_1, ..., \chi_n\rangle$$ is a derivation of $$\varphi$$ from $$\Gamma$$, then $$\Gamma \models \varphi$$. &nbsp;

2. Show that given a set $$\Gamma$$ and formulas $$\varphi$$ and $$\psi$$, $$\Gamma \vdash \neg \varphi \to (\varphi \to \psi)$$.&nbsp;

3. Show that given a set $$\Gamma$$ and a formula $$\varphi$$, $$\Gamma$$ is inconsistent if both $$\Gamma, \varphi$$ and $$\Gamma, \neg \varphi$$ are inconsistent.<br/>Hint: Please feel free to make sue of the Deduction Theorem and whatever lemmas you may find helpful from lecture.&nbsp;

4. Consider the axiomatic system that results from our axiom system when $$A3$$ is replaced with the axiom:
   $$
   (\neg p \to \neg q) \to (q \to p) \tag{A3'}
   $$
   We write $$\Gamma \vdash' \varphi$$ to indicate that $$\varphi$$ is derivable from $$\Gamma$$ in the new system. Justify the equivalence between the two axiom systems. That is, prove that no matter what $$\Gamma$$ and $$\varphi$$ may be,
   $$
   \Gamma \vdash \varphi \ \text{iff} \ \Gamma \vdash' \varphi.
   $$
   Hint: Please note that the argument for the Deduction Theorem carries over to the new system without incident. Further hints available upon request.



### modal propositional logic&nbsp;

&nbsp;

Consider the formula:
$$
\Box (\Box P \to P) \to \Box P
$$
Prove that it is valid in a frame $$\langle W, R\rangle$$ if, and only if, $$R$$ is converse well-founded on $$W$$.