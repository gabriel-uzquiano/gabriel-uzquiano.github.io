---


---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>


<script>
  const password = "mypassword";
  const userInput = prompt("Enter password to view this page:");
   if (userInput !== password) {
    document.body.innerHTML = "<h2>Access Denied</h2>";
  }
</script>

## solutions to selected problems

### relations

1. Find a relation $$R$$ on the set of English words $$W$$ with each of the profiles given below:&nbsp;

   1. irreflexive, asymmetric, and transitive on $$W$$.

      $$\{(u, v)\in W \times W:$$ $$u$$ precedes $$v$$ in the lexicographical order$$\}$$

   2. reflexive and euclidean on $$W$$.
   
      $$\{(u, v)\in W \times W:$$ $$u$$ is synonymous with $$v\}$$
   
   3. irreflexive, symmetric, and intransitive on $$W$$.
   
      $$\{(u, v)\in W \times W:$$ $$u$$ is an antonym of $$v\}$$&nbsp;
   
    Please justify your answers.&nbsp;

2. Draw a diagram for a finite relation $$R$$ on a set $$W$$ with each of the profiles given below:

   1. reflexive, symmetric, and non-transitive on $$W$$.

   2. non-reflexive, symmetric, and intransitive on $$W$$.

   3. irreflexive, symmetric, and transitive on $$W$$.

   4. euclidean, connected, and non-reflexive on $$W$$.

   Please justify your answers.&nbsp;&nbsp;&nbsp;&nbsp;

   

3. Justify each of the claims given below:&nbsp;

   1. A *symmetric* relation $$R$$ on a set $$A$$ is transitive on $$A$$ if, and only if, $$R$$ is euclidean on $$A$$.

      There are two directions to consider.

      $$(\Rightarrow)$$ Suppose a symmetric relation $$R$$ on a set $$A$$ is transitive on $$A$$. We want to show that $$R$$ is euclidean on $$A$$. That is, we argue that 

      for every $$x, y, z \in A$$, if $$Rxy$$ and $$Rxz$$, then $$Ryz$$.&nbsp;

      

      Let $$x, y, z$$ be arbitrary members of $$A$$. Assume that $$Rxy$$ and $$Rxz$$. By symmetry of $$R$$ on $$A$$, $$Ryx$$. So, since $$Ryx$$ and $$Rxz$$, by transitivity of $$R$$ on $$A$$, $$Ryz$$, which is what we wanted.

      $$(\Leftarrow)$$ Suppose a *symmetric* relation $$R$$ on a set $$A$$ is euclidean on $$A$$. We want to show that $$R$$ is transitive on $$A$$. That is, we argue that

      for every $$x, y, z \in A$$, if $$Rxy$$ and $$Ryz$$, then $$Rxz$$.&nbsp;

      Let $$x, y, z$$ be arbitrary members of $$A$$. Assume that $$Rxy$$ and $$Ryz$$. By symmetry of $$R$$ on $$A$$, $$Ryx$$. So, since $$Ryx$$ and $$Ryz$$ and $$R$$ is euclidean on $$A$$, we have $$Rxz$$, which is what we wanted.

   2. If a relation $$R$$ is both reflexive and euclidean on a set $$A$$, then $$R$$ is symmetric on $$A$$.

       Suppose a relation $$R$$ is reflexive and euclidean on a set $$A$$​. We want to show that $$R$$ is symmetric on $$A$$. That is, we argue that 

      for every $$x, y \in A$$, if $$Rxy$$, then $$Ryx$$.&nbsp;

      Let $$x, y$$ be arbitrary members of $$A$$ and assume that $$Rxy$$. Since $$R$$ is reflexive on $$A$$, $$Rxx$$. But since $$R$$ is euclidean on $$A$$ and we have $$Rxy$$ and $$Rxx$$, we conclude $$Ryx$$.

   3. $$R$$ is an equivalence relation on a set $$A$$ if, and only if, $$R$$ is reflexive and euclidean on $$A$$.

      There are two directions to consider.

      $$(\Rightarrow)$$ Suppose $$R$$ is an equivalence relation on a set $$A$$. Then $$R$$ is reflexive, symmetric, and transitive on $$A$$. By 3.1., since $$R$$ is a symmetric relation on $$A$$, which is transitive on $$A$$, we conclude that $$R$$ is euclidean on $$A$$.

      $$(\Leftarrow)$$ Suppose $$R$$ is reflexive and euclidean on $$A$$. By 3.2., $$R$$ is symmetric on $$A$$. So, by 3.1., $$R$$ must be transitive on $$A$$. It follows that $$R$$ is reflexive, symmetric, and transitive on $$A$$.

      &nbsp;

4. True or false? If true, please provide an argument. If false, provide a counterexample.

   1. The empty set $$\emptyset$$ is a binary relation on any set $$A$$.

      True, $$\emptyset$$ is a subset of $$A \times A$$.

   2. If a binary relation $$R$$ on a set $$A$$ is reflexive, symmetric, and connected on $$A$$, then $$R$$ is euclidean on $$A$$.

      True. Suppose $$R$$ is reflexive, symmetric, and connected on $$A$$. We want to show that $$R$$ is euclidean on $$A$$. That is, we argue that 

      for every $$x, y, z \in A$$, if $$Rxy$$ and $$Rxz$$, then $$Ryz$$.&nbsp;

      Let $$x, y, z$$ be arbitrary members of $$A$$. Assume that $$Rxy$$ and $$Rxz$$. Since $$R$$ is connected on $$A$$, $$Ryz$$ or $$y = z$$ or $$Rzy$$. 

      if $$Ryz$$, then we are done. 

      if $$y = z$$, then by reflexivity of $$R$$ on $$A$$, $$Ryz$$.

      if $$Rzy$$, then by symmetry of $$R$$ on $$A$$, $$Ryz$$.&nbsp;

      Either way, if $$Rxy$$ and $$Ryz$$, then $$Ryz$$.

   3. If a binary relation $$R$$ on a set $$A$$  is euclidean and connected on $$A$$, then $$R$$ is either reflexive or symmetric on $$A$$.

      False. Consider a set $$A = \{a, b\}$$ and let $$R = \{(a, b), (b, b)\}$$. $$R$$ is euclidean and connected on $$A$$. Yet, $$R$$ is *not* symmetric on $$A$$. &nbsp;

