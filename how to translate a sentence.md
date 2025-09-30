---
title: USC Introduction to Logic
author: Gabriel Uzquiano
description: |
  Assignment 2
base-css:
- https://static.carnap.io/css/tufte.css
- https://static.carnap.io/css/tuftextra.css
js:
- https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/js/pointTotal.js

---



# how to translate a sentence

There is a [genre of puzzles](https://philosophy.hku.hk/think/logic/knights.php) made popular by Raymond Smullyan in which we are told that each of some given characters is either a **knight** or a **knave**. Now, **knights always tell the truth**: if a knight state a sentence, then the sentence is true. On the other hand, **knaves always lie**: if a knave states a sentence, then that sentence is false.  That is, if $A$ makes a statement $p$, then:

- If $A$ is a knight, then $p$ is true
- If $A$ is a knave, then $p$ is false

The goal of each puzzle below is to figure out for each character, whether they are a knight or a knave.

## puzzle 1

We have two characters, $A$ and $B$, and $A$ makes the statement:

$A$: 	We are both knaves.

Is $A$ a knight or a knave? Is $B$ a knight or a knave?

To make progress, we will translate the statement into the language of propositional logic:

**Translation Key**:

​	$p$: $A$ is a knight

​	$q$: $B$ is a knight

Since the characters are knaves if, and only if, they are not knights, we will translate the statement '$B$ is a knave' as $\neg q$.

$A$:	$\neg p \wedge \neg q$.

To check whether $A$ is a knight, we consider the truth table:

```{.TruthTable .Simple system="gamutPND" options="nodash autoAtoms nocounterexample immutable" submission="none"}
1. ~p /\ ~q
|  FT F  FT   
|  FT F  TF
|  TF F  FT
|  TF T  TF
```

Now:

- if $A$ is a knight, then we are in rows 1 or 2. Unfortunately, we can rule bout out as live options, since they are rows on which the statement $A$ makes is false.

So, $A$ is a knave, and we have two rows as live options: row 3 and row 4.

- if $B$ is a knight, then we are in row 3, which remains a live option.
- if $B$ is a knave, then we are in row 4. Unfortunately, that would be a row in which $A$ makes a true statement, which is inconsistent with their being a knight.

So, $A$ is a knight and $B$ is a knave.

## puzzle 2

We have two characters, $A$ and $B$, and $A$ makes the statement:

$A$: 	I'm a knight if, and only if, $B$ is a knave.

Is $A$ a knight or a knave? Is $B$ a knight or a knave?

To make progress, we will translate the statement into the language of propositional logic:

**Translation Key**:

​	$p$: $A$ is a knight

​	$q$: $B$ is a knight

Since the characters are knaves if, and only if, they are not knights, we will translate the statement '$B$ is a knave' as $\neg q$.

$A$:	$(p \to \neg q) \wedge (\neg q \to p)$.

To check whether $A$ is a knight, we consider the truth table:

```{.TruthTable .Simple system="gamutPND" options="nodash autoAtoms nocounterexample immutable" submission="none"}
1. (p -> ~q) /\ (~q -> p)
|   T F  FT   F  FT T  T
|   T T  TF   T  TF T  T
|   F T  FT   T  FT T  F
|   F T  TF   T  TF F  F
```

Now:

- if $A$ is a knight, then we are in rows 1 or 2. We can rule out row 1 as a live option, since it is a row on which the statement $A$ makes is false.

On the other hand, 

- if $A$ is a knave, then we are in rows 3 or 4. But we can rule them both out, since they would be rows on which $A$ makes a true statement.

So, we are left with row 1 as the only live option, and we conclude that $A$ is a knight and $B$ is a knave.

## puzzle 3

Both characters make a statement this time:

$A$: 	I'm a knight only if both of us are knights.

$B$:	I'm a knave, unless $A$ is a knight

Is $A$ a knight or a knave? Is $B$ a knight or a knave?

We will continue to use the same translation key and translate the statements:

$A$:	$p \to (p \wedge q)$

$B$:	$\neg p \to \neg q$

To check whether $A$ is a knight, we consider the truth table:

```{.TruthTable .Simple system="gamutPND" options="nodash autoAtoms nocounterexample immutable" submission="none"}
1. p -> (p /\ q), ~p -> ~q
|  T T   T T  T   FT T  FT
|  T F   T F  F   FT T  TF
|  F T   F F  T   TF F  FT
|  F T   F F  F   TF T  TF
```

Now:

- if $A$ is a knight, then we are in rows 1 or 2. Unfortunately, we can rule out row 2 as a live option, since it is one on which the statement $A$ makes is false.

- if $B$ is a knight, then we are in rows 1 or 3. Unfortunately, we can rule out row 3, since it is one on which the statement $B$ makes is false.

So, it is consistent with the situation just now described that we are in row 1 and both $A$ and $B$ are knights.

On the other hand:

- if $A$ is a knave, then we are in rows 3 or 4. Unfortunately, we can rule out both as live options, since they are rows on which the statement $A$ made comes out true.
- if $B$ is a knave, then we are in rows 2 or 4. Unfortunately, we can rule out row 4, since it is one on which the statement $B$ made is true. But notice that row 2 had been ruled out at the outset since that would be one in which $A$ is a knight making a false statement.

## puzzle 4

Both characters make a statement this time:

$A$: 	At least one of us is a knight.

$B$:	$A$ is a knight only if both of us are knights or both of us are knaves.

Is $A$ a knight or a knave? Is $B$ a knight or a knave?

We will continue to use the same translation key and translate the statements:

$A$:	$p \vee q$

$B$:	$p \to (\neg p \wedge \neg q)$

To check whether $A$ is a knight, we consider the truth table:

```{.TruthTable .Simple system="gamutPND" options="nodash autoAtoms nocounterexample immutable" submission="none"}
1. p \/ q, p -> (~p /\ ~q)
|  T T  T  T  F  FT F  FT
|  T T  F  T  F  FT F  TF
|  F T  T  F  T  TF F  FT 
|  F F  F  F  T  TF T  TF  
```

Now:

- if $A$ is a knight, then we are in rows 1 or 2. Both remain live options because the statement $A$ makes is true in both of them.

- if $B$ is a knight, then we are in rows 1 or 3. Unfortunately, we can rule out row 1, since it is one on which the statement $B$ makes is false.

So, we have ruled out a situation in which both $A$ and $B$ are knights.

On the other hand:

- if $A$ is a knave, then we are in rows 3 or 4. Unfortunately, we can rule both out as live options, since they are rows on which the statement $A$ made comes out true.

So, $A$ is a knight and the only live option is row 2, which is one on which $B$ is a knave.

We conclude that $A$ is a knight and $B$ is a knave.
