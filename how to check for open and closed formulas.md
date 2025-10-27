---
title: natural deduction continued
author: Gabriel Uzquiano
description: |
  How to construct proofs

base-css:
- https://static.carnap.io/css/tufte.css
- https://static.carnap.io/css/tufte-extra.css
---



# open and closed formulas

A formula is **open** iff there are **free occurrences of variables** in the formula.

A formula is **closed** iff there are **no free occurrences of variables** in the formula.

## how to identify free v bound occurrences of variables

To identify **free** versus **bound** occurrences of variables in 
$$
\forall x (Rxy \to \exists z (Px \wedge Qz))
$$

1. Identify the quantifiers and their scopes:

   - [$\boldsymbol{\forall x}$]{.mark} [$(Rxy \to \exists z(Px \wedge Qz)$]{.mark} 

   - $\forall x (Rxy \to$ [$\boldsymbol{\exists z}$]{.mark}[$(Px \wedge Qz)$]{.mark}$)$

2. Find occurrences of variables within each scope

   - There are two occurrences of $x$ are within the scope of $\forall x$

   - Only the occurrence of $z$ is within the scope of $\exists z$

3. Classify each occurrence as free or bound

   - The occurrences of $x$ are **bound**, since they are both within the scope of the first quantifier $\forall x$. 

   - The occurrence of $z$ is **bound**, since it is within the scope of the quantifier $\exists z$

   - The occurrence of $y$ is **free**, since is not within the scope of either quantifier.

To identify **free** versus **bound** occurrences of variables in 
$$
\forall x Rxy \to \exists z (Px \wedge Qz)
$$

1. Identify the quantifiers and their scopes:

   - [$\boldsymbol{\forall x}$]{.mark} [$Rxy$]{.mark} 

   - $\forall x Rxy \to$ [$\boldsymbol{\exists z}$]{.mark}[$(Px \wedge Qz)$]{.mark}

2. Find occurrences of variables within each scope

   - There first occurrence of $x$ is within the scope of $\forall x$

   - Only the occurrence of $z$ is within the scope of $\exists z$

3. Classify each occurrence as free or bound

   - The first occurrence of $x$ is **bound**, since it is within the scope of the quantifier $\forall x$. 
   - The second occurrence of $x$ is **free**, since it is not within the scope of either quantifier.

   - The occurrence of $z$ is **bound**, since it is within the scope of the quantifier $\exists z$

   - The occurrence of $y$ is **free**, since is not within the scope of either quantifier.

## how to check is a formula is open or closed

To check whether a formula $\forall x \exists y(Rxy \wedge Ryx)$ is open or closed

1. Check whether there are free occurrences of variables in the formula.

   - $\forall x \exists y(Rxy \wedge Ryx)$ has no free occurrences of variables:

     - The first and second occurrences of $x$ are within the scope of $\forall x$:

       [$\boldsymbol{\forall x}$]{.mark} [$\exists y (R\boldsymbol{x}y \wedge Ry\boldsymbol{x})$]{.mark}

     - The first and second occurrences of $y$ are within the scope of $\exists y$:

       $\forall x$ [$\boldsymbol{\exists y}$]{.mark}[$\exists y (Rx\boldsymbol{y} \wedge R\boldsymbol{y}x)$]{.mark}

2. Classify the formula as open or closed as the case may be

   - $\forall x \exists y(Rxy \wedge Ryx)$ is **closed**



