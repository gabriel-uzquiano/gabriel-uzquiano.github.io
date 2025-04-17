---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>
## problems

### completeness

1. Consider the following conditions on accessibility:

   -  A relation $$R$$ *dense* on $$W$$ if, and only if, for all $$u, v \in W$$, if $$Ruv$$, then there is some $$t\in W$$ such that $$Rut$$ and $$Rtv$$. 
   - A relation $$R$$ is *functional* on $$W$$ if, and only if, for all $$w, u, v \in W$$, if $$wRu$$ and $$wRv$$, then $$u = v$$. 
   
   Outline an argument for the completeness of each normal modal system listed below with respect to the class of frames $$(W, R)$$ in which $$R$$ satisfies the relevant condition:<br/>
   
   
   
   1. $$\textsf{K} + \Diamond p \to \Box p$$ / $$R$$ is functional on $$W$$.
   
      We  argue that the canonical accessibility relation $$R_\Sigma$$ is functional:
   
      For all $$\Gamma, \Delta \in W_\Sigma$$,  if $$R_\Sigma \Gamma \Delta$$ and $$R_\Sigma \Gamma \Theta$$, then $$\Theta = \Delta$$.
   
      Suppose $$R_\Sigma \Gamma \Delta$$ and $$R_\Sigma \Gamma \Theta$$, which means:
      $$
      \{\Diamond \varphi: \varphi \in \Delta\} \subseteq \Gamma\\
      \{\varphi: \Box \varphi \in \Gamma\} \subseteq \Delta
      $$
      and
      $$
      \{\Diamond \varphi: \varphi \in \Theta\} \subseteq \Gamma\\
      \{\varphi : \Box \varphi \in \Gamma\} \subseteq \Theta
      $$
      
   
      We now argue $$\Delta \subseteq \Theta$$ and $$\Theta \subseteq \Delta$$. Without loss of generality, consider the first claim $$\Delta \subseteq \Theta$$. If $$\varphi \in \Delta$$, then $$\Diamond \varphi \in \Gamma$$. Since $$\Sigma \vdash \Diamond \varphi \to \Box \varphi$$, $$\Box \varphi \in \Gamma$$ and $$\varphi \in \Theta$$.
   
      The justification of the second claim is completely parallel.
   
       
   
   2. $$\textsf{K} + \Diamond p \to \Diamond \Diamond p$$ / $$R$$ is dense on $$W$$
   
      <br/>
   
      We  argue that the canonical accessibility relation $$R_\Sigma$$ is dense:
   
      For all $$\Gamma, \Delta \in W_\Sigma$$,  if $$R_\Sigma \Gamma \Delta$$, then there is some $$\Theta \in W_\Sigma$$ such that $$R_\Sigma \Gamma \Theta$$ and $$R_\Sigma \Theta \Delta$$. That is, there is $$\Theta \in W_\Sigma$$ such that 
      $$
      \{\varphi: \Box \varphi \in \Gamma\} \subseteq \Theta
      $$
      and
      $$
      \{\Diamond \psi: \psi \in \Delta \} \subseteq \Theta
      $$
      To that purpose, it suffices to verify that the union $$\{\varphi :  \Box \varphi \in \Gamma \} \cup \{\Diamond \psi:\psi \in \Delta \}$$ is $$\Sigma$$-consistent. For we should then be able to extend it to a maximal $$\Sigma$$-consistent set $$\Theta$$ with the relevant feature. Suppose that the union is in fact inconsistent. That means that there are $$\varphi_1, \dots, \varphi_n$$ such that $$\Box \varphi_1, \dots, \Box \varphi_n \in \Gamma$$ and $$\Diamond \psi_1, \dots, \Diamond \psi_m$$ such that $$\psi_1, \cdots, \psi_m \in \Delta$$ such that 
      $$
      \begin{array}{lll}
      \vdash_{\Sigma} (\varphi_1 \wedge \dots \wedge \varphi_n) \wedge (\Diamond \psi_1 \wedge \dots \wedge \Diamond \psi_m) \to \bot\\
      \end{array}
      $$
      Since $$R_\Sigma \Gamma \Delta$$ and $$\psi_1, \dots , \psi_m \in \Delta$$, $$\psi_1 \wedge \dots \wedge \psi_m \in \Delta$$. Furthermore, since $$\Sigma$$ is a normal modal logic:
      $$
      \vdash_\Sigma \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \to (\Diamond \psi_1 \wedge \dots \wedge \Diamond \psi_m),
      $$
      Therefore:
      $$
      \begin{array}{lll}
      \vdash_{\Sigma} (\varphi_1 \wedge \dots \wedge \varphi_n) \wedge \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \to \bot\\
      \vdash_{\Sigma} (\varphi_1 \wedge \dots \wedge \varphi_n) \to \neg \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \\
      \vdash_{\Sigma} (\varphi_1 \wedge \dots \wedge \varphi_n) \to \neg \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \\
      \vdash_{\Sigma} \Box (\varphi_1 \wedge \dots \wedge \varphi_n) \to \Box \neg \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \\
      \end{array}
      $$
      Now, since $$\Box \varphi_1, \dots \Box \varphi_n \in \Gamma$$, $$\Box \varphi_1 \wedge \dots \wedge \Box \varphi_n \in \Gamma$$ and $$\Sigma$$ being a normal modal logic:
      $$
      \vdash_\Sigma \Box \varphi_1 \wedge \dots \wedge \Box \varphi_n \to \Box (\varphi_1 \wedge \dots \wedge \varphi_n)
      $$
      So, $$\Box (\varphi_1 \wedge \dots \wedge \varphi_n) \in \Gamma$$, and thus $$\Box \neg \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \in \Gamma$$. On the other hand, since $$R_\Sigma \Gamma \Delta$$ and $$\psi_1 \wedge \dots \wedge \psi_m \in \Delta$$, $$\Diamond (\psi_1 \wedge \dots \wedge \psi_m) \in \Gamma$$. Unfortunately:
      $$
      \vdash_\Sigma \Diamond(\psi_1 \wedge \dots \wedge \psi_m) \to \Diamond \Diamond (\psi_1 \wedge \dots \wedge \psi_m),
      $$
      which means that $$\Diamond \Diamond (\psi_1 \wedge \dots \wedge \psi_m)\in \Gamma$$. But $$\Box \neg \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \in \Gamma$$, and therefore $$\neg \Diamond \neg \neg \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \in \Gamma$$, which means that $$\neg \Diamond \Diamond (\psi_1 \wedge \dots \wedge \psi_m) \in \Gamma$$ making $$\Gamma$$ $$\Sigma$$-inconsistent. 
      
      
   
   You may take for granted for each normal modal system $$\Sigma$$ above that if $$\Sigma$$-consistent, a formula $$\varphi$$ is true at some world in the canonical model for $$\Sigma$$.
   
   
   


### tense logic&nbsp;

2. Let $$(T, <)$$ be a total order that is $$R$$-extendible. We say that $$(T, <)$$ is a *well-ordering* iff every subset $$U \subseteq T$$ has a $$<$$-minimal element, that is, a member $$u \in U$$ such that $$t \not < u$$ for all $$t\in U$$. Justify the claim below:

   
   $$
   \begin{array}{lll}
   (T, <) \models \textsf{H}(\textsf{H}p \to p) \to \textsf{H}p & \text{iff} & (T, <) \ \text{is a well-ordering}. \\
   \end{array}
   $$

   <br/>

   $$(\Rightarrow)$$ Suppose $$(T, <)$$ is not a well-ordering. That means that there is a subset $$U \subseteq T$$ without a $$<$$-minimal element. Consider a valuation $$V$$ for which $$V(p)= T \setminus U$$.  Notice that for every $$u \in U$$, 
   $$
   (T, <, V), u \Vdash \neg \textsf{H}p
   $$
   Therefore:
   $$
   (T, <, V), u \Vdash \textsf{H}p \to p
   $$
   Now, if $$v < u$$, then either $$v \in T \setminus U$$ or $$v \in U$$. But if $$v \in T \setminus U$$, then:
   $$
   (T, <, V), v \Vdash p\\(T, <, V), v \Vdash \textsf{H}p \to p
   $$
   That means that for each $$u \in U$$:
   $$
   (T, <, V), u \Vdash \textsf{H}(\textsf{H}p \to p)\\(T, <, V), u \nVdash \textsf{H}(\textsf{H}p \to p) \to \textsf{H} p
   $$
   $$(\Leftarrow)$$ Suppose $(T, <)$ is a well-ordering. Given a valuation $$V$$ and a time $$t \in T$$, suppose
   $$
   (T, <, V), t \nVdash \textsf{H}p
   $$
   Consider $$U = \{u \in T: u<t \wedge u \notin V(p)\}$$. Since $$\textsf{H}p$$ fails at $$t$$, we know $$U$$ to have at least one member. Since $$(T, <)$$ is a well-ordering, $$U$$ must have a $$<$$-minimal member $$u_0$$. That means:
   $$
   (T, <, V), u_0 \Vdash \textsf{H}p\\
   (T, <, V), u_0 \nVdash p\\
   (T, <, V), u_0 \nVdash \textsf{H}p \to p
   $$
   Since $$T$$ is a total order, $$u_0 < t$$ and:
   $$
   (T, <, V), t \nVdash \textsf{H}(\textsf{H}p \to p)
   $$
   So, more generally:
   $$
   (T, <, V), t \Vdash \textsf{H}(\textsf{H}p \to p) \to \textsf{H} p
   $$

3. Which of the following formulas are valid in every branching tree frame?

   1. $$\Diamond \textsf{H}p \to \textsf{H} \Diamond p$$

      If $$(T, <, V)$$ is a branching tree model and $$t/h$$ is an ordered pair that consists of a time $$t$$ and a history $$h$$ through $$t$$, suppose 
      $$
      (T, <, V), t/h \Vdash \Diamond \textsf{H}p
      $$
      So, there is at least one history $$k$$ through $$t$$ such that 
      $$
      (T, <, V), t/k \Vdash \textsf{H}p
      $$
      If $u < k$, then $u \in k$ and $$u\in h$$, which means both $$(T, <, V), u/k \Vdash p$$ and $$(T, <, V), u/h \Vdash p$$. It follows that $$(T, <, V), u/h \Vdash \Diamond p$$. Generalizing $$(T, <, V)\Vdash \textsf{H}\Diamond p$$.

      

   2. $$\textsf{H}\Diamond p \to \Diamond \textsf{H} p$$

      Consider the branching tree frame represented by the diagram below:

      ![ps6.3](https://p.ipic.vip/lv6ycu.png)

      Consider the following valuation on the frame:
      $$
      V(p)= \{t_0/h_3\}
      $$
      We now have the following:
      $$
      (T, <), t_0/h_1 \Vdash \Diamond p\\(T, <), t_1/h_1 \Vdash \textsf{H}\Diamond P
      $$
      However:
      $$
      (T,<), t_1/h_1 \nVdash \textsf{H}p\\
      (T,<), t_1/h_1 \nVdash \Diamond \textsf{H}p
      $$
      
      $$
      
      $$
      
      
      
      
      



