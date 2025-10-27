---
title: natural deduction continued
author: Gabriel Uzquiano
description: |
  How to construct proofs

base-css:
- https://static.carnap.io/css/tufte.css
- https://static.carnap.io/css/tufte-extra.css
---



# how to check for formulas

To check whether the following array is a **formula** of quantificational logic
$$
\exists x \neg Rxy
$$


1. Check whether it is an **atomic** formula

   - $\exists x \neg Rxy$ is **not** an atomic formula, since atomic formulas consist of a predicate followed by an suitable number of constants or variables. 

2. Check whether it is a **negation** of a formula, a **conjunction** of two formulas, a **disjunction** of two formulas, or a **conditional** generated from two formulas.

   - $\exists x \neg Rxy$ is **not** a negation of a formula because it does not start with a negation.
   - $\exists x \neg Rxy$ is **not** a conjunction of two formulas because it does not even contain $\wedge$.
   - $\exists x \neg Rxy$ is **not** a conjunction of two formulas because it does not even contain $\vee$.
   - $\exists x \neg Rxy$ is **not** a conditional because it does not even contain $\to$.

3. Check whether it is a **quantified formula**, namely, the oucome of *prefixing* a formula with a quantifier $\forall$ or $\exists$ followed by a variable.

   - $$\exists x \neg Rxy$$ **could be** a quantified formula, since it is the outcome of prefixing $\neg Rxy$ with the quantifier $\exists x$.

     We just need to check that $\neg Rxy$ is a formula, which it is because it is the negation of an atomic formula $Rxy$.


To check whether the following array is a **formula** of quantificational logic
$$
\neg Rxy
$$


1. Check whether it is an **atomic** formula

   - $\neg Rxy$ is **not** an atomic formula, since atomic formulas consist of a predicate followed by an suitable number of constants or variables. 

2. Check whether it is a **negation** of a formula, a **conjunction** of two formulas, a **disjunction** of two formulas, or a **conditional** generated from two formulas.

   - $\neg Rxy$ **could be** a negation of a formula because it is of the form $\neg \cdots$.

     We need to check that $Rxy$ is a formula.

   - $\neg Rxy$ is **not** a conjunction of two formulas because it does not even contain $\wedge$.

   - $\neg Rxy$ is **not** a conjunction of two formulas because it does not even contain $\vee$.

   - $\neg Rxy$ is **not** a conditional because it does not even contain $\to$.

3. Check whether it is a **quantified formula**, namely, the oucome of *prefixing* a formula with a quantifier $\forall$ or $\exists$ followed by a variable.

   - $$\neg Rxy$$ is **not** a quantified formula since there is no quantifier in it.


   

To check whether the following array is a **formula** of quantificational logic
$$
Rxy
$$


1. Check whether it is an **atomic** formula

   - $Rxy$ **is** an atomic formula, since it consists of a predicate followed by two variables. 





To check whether the following array is a **formula** of quantificational logic
$$
(\forall x \exists y  Rxy \to Py)
$$


1. Check whether it is an **atomic** formula

   - $(\forall x \exists y  Rxy \to Py)$ is **not** an atomic formula, since atomic formulas consist of a predicate followed by an suitable number of constants or variables. 

2. Check whether it is a **negation** of a formula, a **conjunction** of two formulas, a **disjunction** of two formulas, or a **conditional** generated from two formulas.

   - $(\forall x \exists y  Rxy \to Py)$ is **not** a negation of a formula because it does not start with a negation.

   - $(\forall x \exists y  Rxy \to Py)$ is **not** a conjunction of two formulas because it does not even contain $\wedge$.

   - $(\forall x \exists y  Rxy \to Py)$ is **not** a disjunction of two formulas because it does not even contain $\vee$.

   - $(\forall x \exists y  Rxy \to Py)$ **could be** conditional because it is of the form $( \cdots \to \cdots)$

     We need to check whether $\forall x \exists y Rxy$ and $Py$ are formulas.

3. Check whether it is a **quantified formula**, namely, the oucome of *prefixing* a formula with a quantifier $\forall$ or $\exists$ followed by a variable.

   - $$(\forall x \exists y  Rxy \to Py)$$ is **not** a quantified formula

     

   

To check whether the following array is a **formula** of quantificational logic
$$
\forall x  \exists y Rxy
$$


1. Check whether it is an **atomic** formula

   - $\forall x  \exists y Rxy$ is **not** an atomic formula, since atomic formulas consist of a predicate followed by an suitable number of constants or variables. 

2. Check whether it is a **negation** of a formula, a **conjunction** of two formulas, a **disjunction** of two formulas, or a **conditional** generated from two formulas.

   - $\forall x  \exists y Rxy$ is **not** a negation of a formula because it does not start with a negation.
   - $\forall x  \exists y Rxy$ is **not** a conjunction of two formulas because it does not even contain $\wedge$.
   - $\forall x  \exists y Rxy$ is **not** a disjunction of two formulas because it does not even contain $\vee$.
   - $\forall x  \exists y Rxy$ is not a conditional because it does not even contain $\to$.

3. Check whether it is a **quantified formula**, namely, the oucome of *prefixing* a formula with a quantifier $\forall$ or $\exists$ followed by a variable.

   - $$\forall x  \exists y Rxy$$ **could be** a quantified formula since it is of the form $\forall x \cdots$


   

   We need to check that $\exists y Rxy$ is a formula $\cdots$

   - $\exists y Rxy$ **could be** a quantified formula since it is of the form $\exists y \cdots$.

     ​		

   We need to check that $Rxy$ is a formula, which it is, since it is an atomic formula.
