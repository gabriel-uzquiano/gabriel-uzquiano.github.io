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



# how to translate an argument

## puzzle 1

You face a fork in the road. One path leads to safety, and the other leads to certain death. To identical guards stand at the fork. One of them is a **knight**, who always answers truthfully, and the other is a **knave**, who always lies. You do **not** know who is who, but you know that they both know which road will take you to safety.

You are allowed to ask **only one question** to **one of the guards** to figure out which road to take to safety.

<details>
  <summary>Click here to show a solution</summary>
  **If I had asked the other guard which road leads to safety, what would they have answered?**
</details>


Now:

- If I had asked the knight, then they would have pointed me to safety.
- If I had asked the knave, then they would have pointed me to death.

So, I can reason as follows:

I'm asking  the question to either a knight or a knave. 

- If **I'm asking the knight**, then if I had asked the other guard, they would have pointed me to death. So, if I'm asking the knight, I'm being pointed to death.
- If **I'm asking the knave**, then if I had asked the other guard, they would have pointed me to safety. So, if I'm asking the knave, I'm being pointed to death.

Either way, I will be pointed to death.

Here is the argument in premise-conclusion form:

1. Either I'm asking the knight or I'm asking the knave.
2. If I'm asking the knight, then the other guard would have pointed me to death.
3. If the other guard would have pointed me to death, then if I'm asking the knight, then I'm being pointed to death.
4. If I'm asking the knave, then the other guard would have pointed me to safety.
5. If the other guard would have pointed me to safety, then if I'm asking the knave, then I'm being pointed to death.
6. I'm being pointed to death.

**Translation Key**:

​	$p$: 	I'm asking the knight

​	$q$: 	I'm asking the knave

​	$r$:	The other guard would have pointed me to death.

​	$s$:	The other guard would have pointed me to safety.

​	$t$:	I'm being pointed to death.



```{.Translate .Prop system="gamutPND" submission="none"}
1. p \/ q :Either I'm asking the knight or I'm asking the knave. 
|p \/ q
```

```{.Translate .Prop system="gamutPND" submission="none"}
2. p -> r : If I'm asking the knight, then the other guard would have pointed me to death.
|p -> r
```

```{.Translate .Prop system="gamutPND" submission="none"}
3. r -> (p ->t): If the other guard would have pointed me to death, then if I'm asking the knight, then I'm being pointed to death.
|r -> (p -> t)
```

```{.Translate .Prop system="gamutPND" submission="none"}
4. q -> s : If I'm asking the knave, then the other guard would have pointed me to safety.
|q -> s
```

```{.Translate .Prop system="gamutPND" submission="none"}
5. s -> (q -> t) :If the other guard would have pointed me to safety, then if I'm asking the knave, then I'm being pointed to death.
|s ->(q -> t)
```

```{.Translate .Prop system="gamutPND" submission="none"}
6. t :I'm being pointed to death.
|t
```

We can use a partial truth table to check the validity of the argument:

```{.TruthTable .Partial system="gamutPND" options="turnstilemark double-turnstile nodash" submission="none"}
A. p \/ q, p -> r, r -> (p -> t), q -> s, s -> (q -> t), t
```

## puzzle 2

You face another fork in the road. One path leads to safety, and the other leads to certain death. One guard stands at the fork, and you know they are either a **knight**, who answers truthfully, or a **knave**, who lies. You do **not** know which one they are but you know that the guard knows which road will take you to safety.

You are allowed to ask **only one question** to **the guard** to figure out which road to take to safety.

<details>
  <summary>Click here to show a solution</summary>
  **If I asked whether the left path leads to safety, would you say yes?**
</details>

**If the left path leads to safety**, then

- If I'm asking a knight, then they say *yes*.

- If I'm asking a knave, then they say *yes*. 

  For if I asked a knave, they would have lied and said *no*. So, I'm asking a knave, they will now lie and say *yes*.

**If the left path leads to death**, then 

- If I'm asking a knight, then they say *no*.

- If I'm asking a knave, then they say *no*. 

  For if I asked a knave, they would have lied and said *yes*. So, I'm asking a knave, they will now lie and say *no*.

So, I can reason as follows:

Either the left path leads to safety or to death. 

- The left path leads to safety only if both a knight and a knave would answer *yes* to my question.
- The left path leads to death only if both a knight and a knave would answer *no* to my question.
- If both a knight and a knave would answer *yes* to my question if, and only if, they would both not answer *no* to my question.
- If they both answer *yes* to my question, then the left path leads to safety.
- If they both answer *no* to my question, then the left path leads to death. 

So, if they both answer *yes* to my question, then the left path leads to safety, and if they both answer *no* to my question, then the left path leads to death. 

Here is the argument in premise-conclusion form:

1. Either the left path leads to safety or it leads to death.
2. If the left path leads to safety, then they both would answer *yes*.
3. If the left path leads to death, then they both would answer *no*.
4. They both answer *yes* if, and only if, they both not answer *no*.
5. If they both answer *yes*, the left path leads to safety, and if they both answer *no*, then the left path leads to death.

**Translation Key**:

​	$p$: 	The left path leads to safety.

​	$q$: 	The left path leads to death.

​	$r$:	They both answer *yes*

​	$s$:	They both answer *no*





```{.Translate .Prop system="gamutPND" submission="none"}
1. p \/ q :Either the left path leads to safety or it leads to death.
|p \/ q
```

```{.Translate .Prop system="gamutPND" submission="none"}
2. p -> r : If the left path leads to safety, then they both would answer yes.
|p -> r
```

```{.Translate .Prop system="gamutPND" submission="none"}
3. q -> t: If the left path leads to death, then they both would answer no.
|q -> t
```

```{.Translate .Prop system="gamutPND" submission="none"}
4. r <-> ~t : They both answer yes if, and only if, they both not answer no
|r <-> ~t 
```

```{.Translate .Prop system="gamutPND" submission="none"}
5. (r -> p) /\ (t -> q) :If they both answer yes, the left path leads to safety, and if they both answer no, then the left path leads to death.
|(r -> p) /\ (t -> q)
```

We can use a partial truth table to check the validity of the argument:

```{.TruthTable .Partial system="gamutPND" options="turnstilemark double-turnstile nodash" submission="none"}
A. p \/ q, p -> r, q -> t, r <-> ~t, (r -> p) /\ (t -> q)
```

## 

 

