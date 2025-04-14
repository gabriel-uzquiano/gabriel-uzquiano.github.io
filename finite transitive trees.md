# Finite Transitive and Irreflexive Trees

$$\textsf{KL}$$ is the logic $$\textsf{K} + \Box(\Box p \to p) \to \Box p$$.

This system is in fact an extension of $$\textsf{K4}$$:

$$\textsf{KL} \vdash \Box p \to \Box \Box p$$.

A transitive and irreflexive frame $$( W, R)$$ is a *tree* iff it is $$L$$-connected, that is, for all $$x, y, z\in W$$, if $$yRx$$ and $$zRx$$, then either $$yRz$$ or $$y = z$$ or $$zRy$$.

The goal of the project is to prove that $$\textsf{KL}$$ is sound and complete with respect to the class of finite transitive and irreflexive frames that are trees. Three helpful sources for the project are:

- [Blackburn, de Rijke, and Venema. Modal Logic, Cambridge University Press, 2022](https://uosc.primo.exlibrisgroup.com/discovery/fulldisplay?context=L&vid=01USC_INST:01USC&search_scope=MyInst_and_CI&tab=Everything&docid=alma991043529402703731).

- [Boolos, G. 1994. *The Logic of Provability* Cambridge University Press, Chapters 4, 5, and 6.](https://uosc.primo.exlibrisgroup.com/permalink/01USC_INST/hs9vaa/alma991043530174003731) NB. Boolos uses the label $$\textsf{GL}$$ for what we have called $$\textsf{KL}$$.
- [Cresswell and Hughes. A New Introduction to Modal Logic. Taylor & Francis, 1996](https://uosc.primo.exlibrisgroup.com/discovery/fulldisplay?context=PC&vid=01USC_INST:01USC&search_scope=MyInst_and_CI&tab=Everything&docid=cdi_proquest_miscellaneous_38353327). NB. Hughes and Cresswell use label $$\textsf{KW}$$ for $$\textsf{KL}$$.

Here are some remarks you may need along the way.

**Remark 1**	Let $$(W, R)$$ be a finite and transitive frame. Then $$(W, R)$$ is irreflexive iff $$(W, R)$$ is converse well-founded.

This is in fact Theorem 11 in p. 76 of [Boolos, G. 1994. *The Logic of Provability* Cambridge University Press.](https://uosc.primo.exlibrisgroup.com/permalink/01USC_INST/hs9vaa/alma991043530174003731)

**Remark 2**	A formula $\varphi$ is valid in all finite transitive and irreflexive frames iff it is valid in all finite transitive and irreflexive frames that are trees.

This is Theorem 12 in p. 76 of [Boolos, G. 1994. *The Logic of Provability* Cambridge University Press.](https://uosc.primo.exlibrisgroup.com/permalink/01USC_INST/hs9vaa/alma991043530174003731)

**Remark 3**	$$\vdash_{\textsf{KL}} \Box p \to \Box \Box p$$.

For a proof, you may consult p. 150 of [Cresswell and Hughes. A New Introduction to Modal Logic. Taylor & Francis, 1996](https://uosc.primo.exlibrisgroup.com/discovery/fulldisplay?context=PC&vid=01USC_INST:01USC&search_scope=MyInst_and_CI&tab=Everything&docid=cdi_proquest_miscellaneous_38353327) or, alternatively, Theorem 18 in pp. 11 and 12 of [Boolos, G. 1994. *The Logic of Provability* Cambridge University Press.](https://uosc.primo.exlibrisgroup.com/permalink/01USC_INST/hs9vaa/alma991043530174003731)

## Soundness

**Remark 3** 	If $\vdash_{\textsf{KL}} \varphi$, then $$\varphi$$ is valid in all transitive and converse well-founded frames, and $$\varphi$$ is valid in all finite, transitive, and irreflexive frames. 

**Remark 4** 	If $\vdash_{\textsf{GL}} \varphi$, then $$\varphi$$ is valid in all finite, transitive, and irreflexive frames that are trees.

The last remark is an immediate consequence of Remarks 2 and 3. 

## Completeness

We use the method of filtrations for the completeness of $$\textsf{KL}$$ with respect to the class of finite, transitive, and irreflexive models. This is in fact problem 4.8.7 in [Blackburn, de Rijke, and Venema. Modal Logic, Cambridge University Press, 2022](https://uosc.primo.exlibrisgroup.com/discovery/fulldisplay?context=L&vid=01USC_INST:01USC&search_scope=MyInst_and_CI&tab=Everything&docid=alma991043529402703731).

For details, you may consult both pp. 150 and 151 of [Cresswell and Hughes. A New Introduction to Modal Logic. Taylor & Francis, 1996](https://uosc.primo.exlibrisgroup.com/discovery/fulldisplay?context=PC&vid=01USC_INST:01USC&search_scope=MyInst_and_CI&tab=Everything&docid=cdi_proquest_miscellaneous_38353327) and pp. 82 and 83 of [Boolos, G. 1994. *The Logic of Provability* Cambridge University Press.](https://uosc.primo.exlibrisgroup.com/permalink/01USC_INST/hs9vaa/alma991043530174003731)

In broad outline, the argument proceeds as follows. If $$\nvdash_{\textsf{KL}}\varphi$$, we simply consider the set of formulas $$\psi$$, which are

- subformulas of $$\varphi$$, or 
- negations of subformulas of $$\varphi$$.

Call these formulas (which are finite in number) $$\varphi$$-formulas. We now build a finite transitive and irreflexive model $$( W, R, V)$$, which contains a world $$\Gamma$$ at which $$\varphi$$ is false. 

- $$W$$ is the set of maximal $$\textsf{KL}$$-consistent sets of $\varphi$-formulas,
- $$R$$ is a binary relation on $$W$$ defined:
  - $$\Gamma R \Delta$$ iff 
    1. for all $$\Box \psi \in \Gamma$$ in $$\Box \psi$$ and $$\psi$$ are in $$\Delta$$, and 
    2. for some formula $$\Box \theta$$ in $$\Delta$$, $$\neg \Box \theta$$ is in $$\Gamma$$.
- $$V(p) = \{\Gamma \in W: p \in \Gamma\}$$

$$\langle W, R, V\rangle$$ is a finite, transitive, and irreflexive model of $$\textsf{KL}$$.

So, $$\nvdash_{\textsf{KL}}\varphi$$ only if $$\varphi$$ is false at a world of some finite transitive and irreflexive model.