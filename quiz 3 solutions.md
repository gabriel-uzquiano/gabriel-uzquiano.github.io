---
title: USC Introduction to Logic
author: Gabriel Uzquiano
description: |
  Quiz 3
base-css:
- https://static.carnap.io/css/tufte.css
- https://static.carnap.io/css/tuftextra.css
js:
- https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/js/pointTotal.js
- https://carnap.io/shared/dsanson@gmail.com/save-work.js
---



# quiz 3 solutions

**This is a timed quiz**. You have **twenty minutes** to complete the quiz from the time you first open this page. Carnap will *not* accept a solution after that time has elapsed.

 **Please remember to click the "Submit" button when you complete a question.** Carnap will acknowledge and record your submission.

# translation

Use the translation key given below in order to translate from English into the language of propositional logic. 

Make sure to enter the translation into each box and hit  **submit** to earn credit for your answers.

Use the following translation key for the next five problems:


> ​	**translation key:**
>
> ​	$p$:	*I will play the lottery*
>
> ​	$q$:	*You will play the lottery*
>
> ​	$r$:	*I win the lottery*



```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
1. r -> p: I will win the lottery only if I play.
|r -> p
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
2. p /\ ~q: I will play the lottery but you won't.
|p /\ ~q
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
3. r -> q: You will play the lottery if I win.
|r -> p
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
4. ~p -> ~r: I won't win the lottery unless I play.
|~p -> ~r
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
5. (p -> q) /\ (q -> p): I will play the lottery if, and only if, you play.
|(p -> q) /\ (q -> p)
```



Use the following translation key for the next five problems:


> ​	**translation key:**
>
> ​	$p$:	Your insurance will cover the expenses
>
> ​	$q$:	You are current with your premium payments
>
> ​	$r$:	You can afford to cover the expenses yourself



```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
6. q -> p: Your insurance will cover the expenses if you are current with your premium payments.
|q -> p
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
7. q \/ r: You are current with your premium payments or you can afford to cover the expenses yourself.
| q \/ r
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
8. ~q /\ ~r: You are neither current with your premium payments nor can afford to cover the expenses yourself.
|~q /\ ~r
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
9. q /\ ~p: You are current with your premium payments but your insurance won't cover the expenses. 
|q /\ ~p
```

```{.Translate .Prop system="gamutPND" options="nocheck exam" points=1}
10. -q -> -p: Your insurance won't cover the expenses unless you are current with your premium payments.
|-q -> -p
```







