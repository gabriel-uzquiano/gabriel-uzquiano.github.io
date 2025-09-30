---
title: USC Introduction to Logic
author: Gabriel Uzquiano
description: |
  assignment 4
base-css:
- https://static.carnap.io/css/tufte.css
- https://static.carnap.io/css/tuftextra.css
js:
- https://cdn.jsdelivr.net/gh/carnap/carnap-contrib@9df544f/js/pointTotal.js
---

Total Points: [pointsgohere]{.pointspan}

# proofs

Your task below is to produce a proof of each conclusion from the given premises. 

Please remember that you should include a justification for each line you write. The justification in question should immediately follow a colon with no space in between the two.

> when a line is a premise or an assumption, you should include the annotation :assumption

Here is a summary of natural deduction rules for propositional logic:

> [natural deduction rules](https://carnap.io/shared/uzquiano@usc.edu/summary%20of%20natural%20deduction%20rules.md)

Carnap will check each step of your proof and render it as you construct it. It will write a `+` next to a line once you have entered an adequate justification for it. If the justification is incorrect, it will produce a `?` or a `✗`. Carnap will often tell you what the problem may have been with your justification: hover the cursor over the `?` or `✗` to see a hint. Once Carnap verifies the complete proof, the top will turn <span style="color:green">green</span>.

The proof box below will allow you to experiment with derivations and check what follows from a set of formulas. The box will display what follows from the given formulas on the basis of the steps you take in the derivation. 

```{.Playground .GamutPND options="indent resize render tabindent" submission="none"}

```

<br/>

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
1. p, q :|-: p /\ q
|p :assumption
|q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
2. p /\ q :|-: q 
|p/\q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
3. p, q :|-: (p /\ q) /\ p
|p :assumption
|q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
4. p, q :|-: q /\ (p /\ q)
|p :assumption
|q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
5. p, q, r :|-: q /\ (p /\ r)
|p :assumption
|q :assumption
|r :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
6. p /\ q, q /\ r :|-: p /\ r
|p/\q :assumption
|q/\r :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
7.  p/\(q/\r) :|-: p /\ q
|p/\(q/\r) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
8. p/\(q/\r) :|-: p /\ q
|p/\(q/\r) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
9. p, q, r /\ s :|-: (p /\ r) /\ (q /\ s)
|p :assumption
|q :assumption
|r /\ s :assumption
```


```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
10. (p /\ q) /\ (r /\ s) :|-: (p /\ r) /\ q
|(p /\ q) /\ (r /\ s) :assumption
```

<br/>

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
11. p -> (q /\ r), p :|-: (q /\ (p /\ r))
|p-> (q /\ r) :assumption
|p :assumption

```

```{.ProofChecker .GamutPND options="indent resize fonts render popout tabindent" points=3 late-credit=2}
12. p/\(q/\r) :|-: p -> r
|p/\(q/\r) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
13. (p /\ q) /\ (r /\ s) :|-: (p /\ r) /\ q
|(p /\ q) /\ (r /\ s) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
14. p -> (q /\ r), q -> p, q :|-: r
|p -> (q /\ r) :assumption
|q -> p :assumption
|q :assumption

```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
15. p /\ q :|-: p -> q
|p/\q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
16. p -> (q -> r), q :|-: p -> r
|p -> (q -> r) :assumption
|q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
17. p /\ q :|-: p -> (r -> q)
|p /\ q :assumption

```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
18. p -> ((q /\ r) -> s) :|-: q -> ((p /\ r) -> s)
|p -> ((q/\r) -> s) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
19. p -> q, q -> r :|-: p -> (q /\ r)
|p -> q :assumption
|q -> r :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=3 late-credit=2}
20. p -> (q -> (r /\ s)), q :|-: p -> s
|p -> (q -> (r /\ s)) :assumption
|q :assumption
```

<br/>

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
21. p, q :|-: (p \/ q) /\ (q \/ r)
|p :assumption
|q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts render popout tabindent" points=4 late-credit=3}
22. (p/\q)\/(q/\r) :|-: q
|(p/\q)\/(q/\r) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
23. (p \/ q) -> (r -> (p -> s)) :|-: p -> (r -> s)
|(p \/ q) -> (r -> (p -> s)) :assumption
```

<br/>

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
24. p -> -(q \/ r), p :|-: -r
|p -> -(q \/ r) :assumption
|p :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
25. p /\ -q :|-: -(p -> q)
|p/\-q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
26. -(-p \/ (q -> r)) :|-: p /\ -(q -> r)
|-(-p \/ (q -> r)) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
27. p -> q, q -> -p, p :|-: r
|p -> q :assumption
|q -> -p :assumption
|p :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
28. p -> (-q -> -p), p, -q :|-: -r
|p -> (-q -> -p) :assumption
|p :assumption
|-q :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
29. -(p -> (q \/r)) :|-: -(p -> q) /\ -(p->r)
|-(p -> (q \/r)) :assumption
```

```{.ProofChecker .GamutPND options="indent resize fonts popout render tabindent" points=4 late-credit=3}
30. p -> (q \/ r), -q, -r:|-: -p
|p -> (q \/ r) :assumption
|-q :assumption
|-r :assumption
```



