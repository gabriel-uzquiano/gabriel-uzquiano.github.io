---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
## problems

### axiomatic derivations&nbsp;

1. Justify the facts given below:

   1. $$\Box \varphi/\varphi$$ is a derived rule of inference for $$\textsf{K}$$.

      

   2. $$\Box \varphi/\varphi$$ is a derived rule of inference for $$\textsf{KT}$$.

      

   3. $$\Box \varphi/\varphi$$ is a derived rule of inference for $$\textsf{KD}$$.

   

   Consider a transformation $$\sigma$$ from formulas of $$\mathcal{L}^{\Box}$$ into formulas of $$\mathcal{L}^{\Box}$$ defined by the recursion:


$$
   \begin{array}{lll}
   \sigma(p) & = & p\\
   \sigma(\neg \varphi) & = &\neg \sigma(\varphi)\\
   \sigma(\varphi \to \psi) & = & \sigma(\varphi) \to \sigma(\varphi)\\
   \sigma (\Box \varphi) & = & \varphi\\
   \end{array}
$$


   In other words, $$\sigma$$ scans a formula for subformulas of the form $$\Box \psi$$ and deletes the first occurrence of a modal operator in those formulas. Thus for example $$\sigma(\Box p \to \Box \Box p)$$ is just the formula: $$p \to \Box p$$, and $$\sigma(\Box p \to \Diamond p)$$, which is $$\sigma(\Box p \to \neg \Box \neg p)$$ becomes the formula: $$p \to \neg \neg p$$.

   For each system $$\Sigma$$ mentioned above, use an induction on the length of proofs in $$\Sigma$$ to prove:


$$
   \begin{array}{llll}
   \text{if} &  \vdash_{\Sigma} \varphi, & \text{then} &  \vdash_{\Sigma} \sigma(\varphi)\\
   \end{array}
$$

   

   <br/>

2. Prove that $$\textsf{KB4}$$ is a *proper* extension of $$\textsf{K5}$$. That is: 

   1. All theorems of $$\textsf{K5}$$ are theorems of $$\textsf{KB4}$$.

      

   2. Not all theorems of $$\textsf{KB4}$$ are theorems of $$\textsf{K5}$$.


   <br/>

3. Prove that $$\textsf{K5}$$ proves the *necessitation* of every axiom of $$\textsf{KB4}$$. That is:

   1. $$\vdash_{\textsf{K5}} \Box (\varphi \to \Box \Diamond \varphi)$$ <br/>
   
      
   
   2. $$\vdash_{\textsf{K5}} \Box (\Box \varphi \to \Box \Box \varphi)$$<br/>


   <br/>

4. Justify the facts given below:

   1. $$\Box \varphi / \varphi$$ is *not* a derived rule of inference for $$\textsf{K5}$$.

      

   2. $$\Box \varphi/\varphi$$ is *not* a derived rule of inference for $$\textsf{KB4}$$

      

   <br/>

   



