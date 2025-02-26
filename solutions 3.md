---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
## problems

### propositional logic: axiomatic derivations

1. Show that the deductive system we have introduced is *sound*: a formula $$\varphi$$ is provable from a set of formulas $$\Gamma$$ only if $$\varphi$$ is a logical consequence of $$\Gamma$$. That is, &nbsp;

   

   $$
   \Gamma \vdash \varphi \ \text{only if} \ \Gamma \models \varphi.
   $$

   We use complete induction  (without a base case) to argue that for every positive integer $$n$$, if $$\langle \chi_1, ..., \chi_n\rangle$$ is a derivation of $$\varphi$$ from $$\Gamma$$, then $$\Gamma \models \varphi$$.&nbsp;

   That is, we argue for the following conditional:

   *If for all $$m < n$$, for all set of formulas $$\Gamma$$ and for all formulas $$\chi_1, \dots \chi_m$$ and $$\varphi$$, $$\langle \chi_1, ..., \chi_m\rangle$$ is a derivation of $$\varphi$$ from $$\Gamma$$ only if $$\Gamma \models \varphi$$, then for all set of formulas $$\Gamma$$ and for all formulas $$\chi_1, \dots \chi_m$$ and $$\varphi$$  $$\langle \chi_1, ..., \chi_n\rangle$$ is a derivation of $$\varphi$$ from $$\Gamma$$ only if $$\Gamma \models \varphi$$.*  

   Suppose that indeed for every $$m < n$$, for all set of formulas $$\Gamma$$ and for all formulas $$\chi_1, \dots \chi_m$$ and $$\varphi$$, $$\langle \chi_1, ..., \chi_m\rangle$$ is a derivation of $$\varphi$$ from $$\Gamma$$ only if $$\Gamma \models \varphi$$. Now, let 
   $$
   \langle \chi_1, ..., \chi_n\rangle
   $$
   be a derivation of $$\varphi$$ from $$\Gamma$$. That means that $$\chi_n = \varphi$$. There are three cases to consider:

   **Case 1**. $$\varphi \in \Gamma$$. 

   If $$V$$ is a valuation satisfying every member of $$\Gamma$$, then $$V$$ satisfies $$\varphi$$, which means $$\Gamma \models \varphi$$.

   **Case 2**. $$\varphi$$ is a logical axiom. 

   That means that $$\varphi$$ is a substitution instance of either $$\textsf{A1}$$ or $$\textsf{A2}$$ or $$\textsf{A3}$$. We now look at each case in turn:

   - $$\varphi$$ is of the form $$p \to (q \to p)[\chi/p, \psi/q]$$.

     $$\models \chi \to (\psi \to \chi)$$. For if $$V(\chi) = 1$$, then $$V(\psi \to \chi) = 1$$ no matter what $$V$$ may be. So, $$V(\chi \to (\psi \to \chi)) = 1$$ no matter what valuation $$V$$ may be. 

   - $$\varphi$$ is of the form $$((p \to (q\to r)) \to ((p \to q) \to (p \to r))[\chi/p, \psi/q, \theta/r]$$

     $$\models ((\chi \to (\psi\to \theta)) \to ((\chi \to \psi) \to (\chi \to \theta))$$

     Suppose a valuation $$V$$ verifies $$\chi \to (\psi\to \theta)$$. Then, if $$V(\chi \to \psi) = 1$$, then if $$V(\chi) = 1$$, $$V(\theta) = 1$$. For otherwise, $$V(\chi \to (\psi \to \theta)) = 0$$. So, $$V$$ verifies $$(\chi \to (\psi\to \theta)) \to ((\chi \to \psi) \to (\chi \to \theta))$$ no matter what $$V$$ may be.

   - $$\varphi$$ is of the form $$(\neg p \to \neg q) \to ((\neg p \to q) \to p)[\chi/p, \psi/q]$$.

     Suppose a valuation $$V$$ verifies $$\neg \chi \to \neg \psi$$. Then, if $$V(\neg \chi \to \psi) = 1$$, $$V(\chi) = 1$$. For otherwise, we would have $$V(\psi) = V(\neg \psi) = 1$$, which is impossible.

   **Case 3**. $$\varphi$$ is obtained by $$\textsf{MP}$$ from two prior lines of the form $$\chi_i$$ and $$\chi_k$$ with $$i, k < n$$ of the form $$\chi_i \to \varphi$$ and $$\chi_i$$. By inductive hypothesis, it follows that $$\Gamma \models \chi_i \to \varphi$$ and $$\Gamma \models \chi_i$$. It follows that $$\Gamma \models \varphi$$. For suppose $$V$$ is a valuation satisfying every member of $$\Gamma$$. Then $$V(\chi_i \to \varphi) = 1$$ and $$V(\chi_i)= 1$$. But then, $$V(\varphi) = 1$$. So, if $$V$$ is a valuation satisfying every member of $$\Gamma$$, then $$V$$ satisfies $$\varphi$$.

   Either way, we conclude that if $$\langle \chi_1, ..., \chi_n\rangle$$ is a derivation of length $$n$$ of $$\varphi$$ from $$\Gamma$$, then $$\Gamma \models \varphi$$.

   

2. Show that given a set $$\Gamma$$ and formula $$\varphi$$, &nbsp;

   

   $$
   \Gamma \vdash (\varphi \to \neg \varphi) \to \neg \varphi
   $$
   <br/>By the Deduction Theorem, we need only show $$\{\varphi \to \neg \varphi\} \vdash \neg \varphi$$. 

   

   $$ \begin{array}{llll} 1 & & (\neg \neg \varphi \to \neg \varphi) \to ((\neg \neg \varphi \to \varphi) \to  \neg \varphi) & \textsf{A3}[\neg \varphi/p, \varphi/q] \\ 2 & & (\varphi \to \neg \varphi) \to (\neg \neg \varphi \to \neg \varphi) & \textsf{Prop} \ 3.5   \\ 3 & & \varphi \to \neg \varphi &  \\ 4 & & \neg \neg \varphi \to \neg \varphi & \textsf{MP} \ 2, 3 \\ 5 & & (\neg \neg \varphi \to \varphi) \to  \neg \varphi & \textsf{MP} \ 1, 4\\ 6 & & \neg \neg \varphi \to \varphi & \textsf{Prop} \ 3.3 \\ 7 & & \neg \varphi & \textsf{MP} \ 5, 6 \end{array} $$



3. Show that given a set $$\Gamma$$ and a formula $$\varphi$$, $$\Gamma$$ is inconsistent if both $$\Gamma, \varphi$$ and $$\Gamma, \neg \varphi$$​ are.<br/>

   *Hint: Please feel free to make use of the Deduction Theorem and whatever propositions you may find helpful from the notes.*&nbsp;

   By $$\textsf{Prop. 3.7}$$, we know that $$\Gamma, \neg \varphi$$ is inconsistent only if $$\Gamma \vdash \varphi$$. But if $$\Gamma, \varphi$$ is inconsistent, $$\Gamma, \varphi \vdash \bot$$, and, by the Deduction Theorem, $$\Gamma \vdash \varphi \to \bot$$. Given $$\textsf{MP}$$, we have $$\Gamma \vdash \bot$$.
   
   Here is a more explicit argument.
   
   If $$\Gamma, \varphi$$ and $$\Gamma, \neg \varphi$$ are both inconsistent, then $$\Gamma, \varphi \vdash \bot$$ and $$\Gamma, \neg \varphi \vdash \bot$$. We now argue that $$\bot$$ is derivable from $$\Gamma$$ alone, that is, $$\Gamma \vdash \bot$$. By the Deduction Theorem, we have $$\Gamma \vdash \varphi \to \bot$$ and, by $$\textsf{Prop. 3.5}$$ and $$\textsf{MP}$$, we have $$\Gamma \vdash \neg \bot \to \neg \varphi$$. Likewise, by another application of the Deduction theorem, we have $$\Gamma \vdash \neg \varphi \to \bot$$, and by $$\textsf{Prop. 3.5}$$ and MP, we have $$\Gamma \vdash \neg \bot \to \neg \neg \varphi$$. In combination with a suitable instance of $$\textsf{A3}$$, we have that $$\Gamma \vdash \bot$$.
   
   We may now outline a derivation of $$\bot$$ from $$\Gamma$$ alone:

$$
\begin{array}{llll} 1 & & \varphi \to \bot & \Gamma, \varphi \vdash \bot, \textsf{DT} \\ 2 & & (\varphi \to \bot) \to (\neg \bot \to \neg \varphi) & \textsf{Prop} \ 3.5   \\ 3 & & \neg \bot \to \neg \varphi & \textsf{MP} \ 1, 2 \\ 4 & & \neg \varphi \to \bot & \Gamma, \neg \varphi \vdash \bot, \textsf{DT} \\ 5 & & (\neg \varphi \to \bot) \to  (\neg \bot \to \neg \neg \varphi) & \textsf{Prop} \ 3.5 \\ 6 & & \neg \bot \to \neg \neg \varphi & \textsf{MP} \ 4, 5 \\ 7 & & (\neg \bot \to \neg \neg \varphi) \to ((\neg \bot \to \neg \varphi) \to \bot) & \textsf{A3}[\bot/p, \neg \varphi/q] \\ 8 & & (\neg \bot \to \neg \varphi) \to \bot & \textsf{MP} \ 6, 7 \\9 & & \bot & \textsf{MP} \ 3, 8\end{array}
$$



4. Consider the axiomatic system that results from our axiom system when $$\textsf{A3}$$ is replaced with the axiom:&nbsp;
   $$
   (\neg p \to \neg q) \to (q \to p) \tag{$\textsf{A3}^\ast$}
   $$

   We write $$\Gamma \vdash^\ast \varphi$$ to indicate that $$\varphi$$ is derivable from $$\Gamma$$ in the new system. Justify the equivalence between the two axiom systems. That is, prove that no matter what $$\Gamma$$ and $$\varphi$$ may be,&nbsp;

   

   $$
   \Gamma \vdash \varphi \ \text{iff} \ \Gamma \vdash^\ast \varphi.
   $$

   *Hint: Please note that the argument for the Deduction Theorem carries over to the new system without incident. Further hints available upon request.*

   There are two directions to consider.
   
   $$(\Leftarrow)$$ If $$\Gamma \vdash^\ast \varphi$$, then $$\Gamma \vdash \varphi$$.
   
   It suffices to point out that all substitution instances of $$\textsf{A3}^\ast$$ are, by $$\textsf{Prop}$$ 3.2, theorems of the original system. That is, $$\Gamma \vdash \textsf{A3}^\ast[\psi/p, \varphi/q]$$ for all $$\psi$$ and $$\varphi$$. That means that we have the means to transform a derivation in the new system into a derivation in the original system.
   
   $$(\Rightarrow)$$ If $$\Gamma \vdash \varphi$$, then $$\Gamma \vdash^\ast \varphi$$.
   
   We now set out to show that all substitution instances of $$\textsf{A3}$$ are theorems of the new system. That is, $$\Gamma \vdash^\ast \textsf{A3}[\psi/p, \varphi/q]$$ for all $$\psi$$ and $$\varphi$$. 
   
   The proof of the Deduction Theorem for the original system carries over without incident to the new system. That is, no matter what set of formulas $$\Gamma$$ may be and what formulas $$\varphi$$ and $$\psi$$ may be, $$\Gamma, \varphi \vdash^\ast \psi$$ only if $$\Gamma \vdash^\ast \varphi \to \psi$$. 
   
   Given the Deduction Theorem for $\vdash^\ast$, we need only verify:
   $$
   \{\neg \varphi \to \neg \psi, \neg \varphi \to \psi\} \vdash^\ast \varphi
   $$
   Given $$\textsf{A3}^\ast$$, we know:
   $$
   \{\neg \varphi \to \neg \psi, \neg \varphi \to \psi\} \vdash^\ast \psi \to \varphi
   $$
   Given the Deduction Theorem, we may appeal to a formulation of $\textsf{Prop 3.1}$ for $\vdash^\ast$:
   $$
   \vdash^\ast (\varphi \to \psi) \to ((\psi \to \chi) \to (\varphi \to \chi))
   $$
   We are now entitled to infer:
   $$
   \{\neg \varphi \to \neg \psi, \neg \varphi \to \psi\} \vdash^\ast \neg \varphi \to \varphi
   $$
   
   We now set out to argue:
   $$
   \vdash^\ast (\neg \varphi \to \varphi) \to \varphi
   $$
   In the meantime, here is a helpful lemma, whose justification is completely parallel to that of $$\textsf{Prop 3.6}$$:
   
   
   $$
   \vdash^\ast \varphi \to ( \neg \varphi \to \bot) \tag{i}
   $$
   
   
   
   From $$\textsf{A1}[\neg \varphi/p,\neg \bot/q]$$, we know $$\{\varphi, \neg \varphi\} \vdash^\ast \neg \varphi \to (\neg \bot \to \neg \varphi)$$ and $$\{\varphi, \neg \varphi\} \vdash^\ast \neg \bot \to \neg \varphi$$. So, by $$\textsf{A3}^\star[\bot/p,\varphi/q]$$, we have $$\{\varphi, \neg \varphi\} \vdash  \varphi \to \bot$$ and $$\{\varphi, \neg \varphi\} \vdash^\ast \bot$$. By the Deduction Theorem for the new system, $$\{\varphi\} \vdash^\ast \neg \varphi \to \bot$$  and $$\vdash^\ast \varphi \to (\neg \varphi \to \bot)$$. 
   
   
   
   We are finally in a position to continue the argument:
   
   $$
   \vdash^\ast (\neg \varphi \to \varphi) \to \varphi \tag{ii}
   $$
   
   
   Note that $$\{\neg \varphi \to \varphi, \neg \varphi\}\vdash^\ast \varphi$$ and $$\{\neg \varphi \to \varphi, \neg \varphi\}\vdash^\ast \neg \varphi$$. Given (i) above, we have $$\vdash^\ast \varphi \to (\neg \varphi \to \bot)$$.  Therefore, $$\{ \neg \varphi \to \varphi, \neg \varphi\} \vdash^\ast \bot$$ and $$\{\neg \varphi \to \varphi\} \vdash^\ast \neg \varphi \to \bot$$. Given $$\textsf{A3}^\ast[\varphi/p, \top/q]$$, we have
   
   
   $$
   \vdash^\ast (\neg \varphi \to \bot) \to (\top \to \varphi).
   $$
   
   
    Recall that $$\bot := \neg \top$$. So, $$\{\neg \varphi \to \varphi\} \vdash^\ast \top \to \varphi$$. But since $$\vdash^\ast \top$$, we conclude $$\{\neg \varphi \to \varphi\} \vdash^\ast \varphi$$. By the Deduction Theorem for the new system we infer that $$\vdash^\ast (\neg \varphi \to \varphi) \to \varphi$$.
   
   We conclude:
   $$
   \{\neg \varphi \to \neg \psi, \neg \varphi \to \psi\} \vdash^\ast \varphi
   $$
   
   
   We need only use two instances of the Deduction Theorem:<br/>
   
   
   $$
   \begin{array}{llll} 
   \{\neg \varphi \to \neg \psi \} & \vdash^\ast & (\neg \varphi \to \psi) \to \varphi & \\
    & \vdash^\ast & \neg \varphi \to \neg \psi \to ((\neg \varphi \to \psi) \to \varphi) & \\
   \end{array}
   $$
   







