---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
## problems

### axiomatic derivations&nbsp;

1. Justify the facts given below:

   1. $$\Box \varphi/\varphi$$ is a derived rule of inference for $$\textsf{K}$$.

      

   2. $$\Box \varphi/\varphi$$ is a derived rule of inference for $$\textsf{KD}$$.

      

   3. $$\Box \varphi/\varphi$$ is a derived rule of inference for $$\textsf{KT}$$.

   

   Consider a transformation $$\sigma$$ from formulas of $$\mathcal{L}^{\Box}$$ into formulas of $$\mathcal{L}^{\Box}$$ defined by the recursion:<br/>

   
   $$
   \begin{array}{lll}
      \sigma(p) & = & p\\
      \sigma(\neg \varphi) & = &\neg \sigma(\varphi)\\
      \sigma(\varphi \to \psi) & = & \sigma(\varphi) \to \sigma(\varphi)\\
      \sigma (\Box \varphi) & = & \varphi\\
      \end{array}
   $$
   <br/>

   In other words, $$\sigma$$ scans a formula for subformulas of the form $$\Box \psi$$ and deletes the first occurrence of a modal operator in those formulas. Thus for example $$\sigma(\Box p \to \Box \Box p)$$ is just the formula: $$p \to \Box p$$, and $$\sigma(\Box p \to \Diamond p)$$, which is $$\sigma(\Box p \to \neg \Box \neg p)$$ becomes the formula: $$p \to \neg \neg p$$.

    For the first two systems $$\Sigma$$ mentioned above, use an induction on the length of proofs in $$\Sigma$$ to prove:


   $$
      \begin{array}{llll}
      \text{if} &  \vdash_{\Sigma} \varphi, & \text{then} &  \vdash_{\Sigma} \sigma(\varphi)\\
      \end{array}
   $$

      

      <br/>

   Consider the case of $$\textsf{K}$$. We will proceed by complete induction without a base case on the length of proofs in $$\textsf{K}$$. We argue that **if** for each $$m < n$$, if there is a proof of $$\varphi$$ in $$\textsf{K}$$ of length less or equal to $$m$$ only if there is a proof of $$\sigma(\varphi)$$ in $$\textsf{K}$$, **then** if there is a proof of  of $$\varphi$$ in $$\textsf{K}$$ of length less or equal to $$n$$ only if there is a proof of $$\sigma(\varphi)$$ in $$\textsf{K}$$.

      Suppose that for each $$m < n$$, there is a proof of $$\varphi$$ in $$\textsf{K}$$ of length less or equal to $$m$$ only if there is a proof of $$\sigma(\varphi)$$ in $$\textsf{K}$$. Now, let 
   $$
   \langle \chi_1, \dots, \chi_n \rangle
   $$
   be a proof of $$\varphi$$ in $$\textsf{K}$$ of length $$n$$. That means that $$\chi_n = \varphi$$ and for all $$i \leq n$$, $$\chi_i$$ is either (a) a tautology, or (b) an axiom of $$\textsf{K}$$, or (b) an outcome of an application of necessitation to a prior line, or (d) an outcome of an application of modus ponens to two prior lines.

      1. If $$\varphi$$ is a tautology, then $$\sigma(\varphi)$$ is a tautology. Strictly speaking, we would have to use a separate induction to convince ourselves that if $$\varphi$$ is derivable from $$\psi_1, \cdots, \psi_n$$ in propositional logic, then $$\sigma(\varphi)$$ is itself derivable from $$\sigma(\psi_1), \cdots , \sigma(\psi_n)$$ in propositional logic. 

      2. $$\varphi$$ is an axiom of $$\textsf{K}$$ of the form $$\Box (\psi \to \chi) \to (\Box \psi \to \Box \chi)$$.

         Note that $$\sigma(\varphi)$$ becomes $$(\psi \to \chi) \to (\psi \to \chi)$$, which is a theorem of $$\textsf{K}$$.

      3. $$\varphi$$ is the necessitation of $$\chi_m$$, $$\Box \chi_m$$, for some $$m < n$$

         That means there is a proof of $$\chi_m$$ in $$\textsf{K}$$ of length $$m < n$$. But notice that $$\sigma(\varphi)$$ is just $$\chi_m$$, and $$\vdash_{\textsf{K}} \sigma(\varphi)$$.

      4. $$\varphi$$ is the consequent of a conditional $$(\psi \to \varphi)$$, which is $$\chi_i$$ for some $$i < n$$ and $$\psi$$ is $$\chi_j$$ for some $$j<n$$. That means that there are proofs of each $$(\psi \to \varphi)$$ and $$\psi$$ in $$\textsf{K}$$ of length less than $$n$$. By inductive hypothesis, $$\vdash_{\textsf{K}} \sigma(\psi \to \varphi)$$ and $$\vdash_{\textsf{K}} \sigma(\psi)$$. Since $$\sigma(\psi \to \varphi)$$ is $$\sigma(\psi) \to \sigma(\varphi)$$, $$\vdash_{\textsf{K}} \sigma(\psi) \to \sigma(\varphi)$$, whence $$\vdash_{\textsf{K}} \sigma(\varphi)$$.

   For $$\textsf{KD}$$, we simply expand 2 to include the case in which $$\varphi$$ is an instance of $$\textsf{D}$$ of the form $$\Box \varphi \to \Diamond \varphi$$, which is just $$\Box \varphi \to \neg \Box \neg \varphi$$. Then:<br/>

   
   $$
   \begin{array}{lll}
   \sigma(\Box \varphi \to \neg \Box \neg \varphi) & = & \sigma(\varphi) \to \sigma(\neg \Box \neg \varphi) \\
    & = & \varphi \to \neg \sigma(\Box \neg \varphi) \\
    & = & \varphi \to \neg \neg \varphi
   \end{array}
   $$
   <br/>

   Since $$\varphi \to \neg \neg \varphi$$ is a tautology, it is a theorem of $$\textsf{KD}$$.

   We are not able to use the same strategy for $$\textsf{KT}$$ because there is no guarantee that the transformation of $$\Box \varphi \to \varphi$$ is a tautology, for example, $$\sigma(\Box (\Box p \to \Box q) \to (\Box p \to \Box q))$$ is just  $$(\Box p \to \Box q) \to (p \to q)$$, which is not a tautology. Instead, we may simply explain how to expand a proof of $$\Box \varphi$$ into a proof of $$\varphi$$ by appeal to axiom $$\textsf{T}$$:<br/>

   
   $$
   \begin{array}{llll}
   1 & \cdots & \\
   2 & \cdots & \\
   n & \Box \varphi & \\
   n+1 & \Box \varphi \to \varphi & \textsf{T}[\varphi/p]\\
   n+2 & \varphi & \textsf{MP} 1, 2\\
   \end{array}
   $$
   <br/>

   <br/>

  

2. Prove $$\textsf{KB4}$$ is a *proper* extension of $$\textsf{K5}$$. That is, 

   1. All theorems of $$\textsf{K5}$$ are theorems of $$\textsf{KB4}$$.<br/>

      

   2. Not all theorems of $$\textsf{KB4}$$ are theorems of $$\textsf{K5}$$.<br/>

      <br/>

      

3. Prove that $$\textsf{K5}$$ proves the *necessitation* of every axiom of $$\textsf{KB4}$$. That is:

   1. $$\vdash_{\textsf{K5}} \Box (\varphi \to \Box \Diamond \varphi)$$<br/>

      

      

   2. $$\vdash_{\textsf{K5}} \Box (\Box \varphi \to \Box \Box \varphi)$$<br/>

      


   <br/>

4. Justify the facts given below:

   1. $$\Box \varphi / \varphi$$ is *not* a derived rule of inference for $$\textsf{K5}$$.<br/>

      

      

   2. $$\Box \varphi/\varphi$$ is *not* a derived rule of inference for $$\textsf{KB4}$$

      

   <br/>

   
