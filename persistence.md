---
​---

​---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>

---

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>

# Special Session

## Persistence

Let us say that something **persists**, iff, somehow or other, it exists at various times; this is the neutral word. 

- I have *existed at/been present at/occupied* times within the 20th century
- I have *existed at/been present at/occupied* times within the 21st century
- I have *existed at/been present at/occupied* multiple times.

So, I persist through time. 

Something **perdures** iff it persists by having different temporal parts, or stages, at different times, though no one part of it is wholly present at more than one time; whereas it **endures** iff it persists by being wholly present at more than one time. (Lewis 1986: 202)

### Perdurance

Perdurance models persistence after spatial extension:

Something is **extended** iff, somethow or other, it occupies multiple space points or regions.

There are regions $$R$$ and $$S$$ near the floor and one meter above ground, respectively such that

- I'm *present in/occupy* region $$R$$
- I'm *present in/occupy* region $$S$$.

So, I'm spatially extended. However, this is because:

- One spatial part of mine is *exactly located in/exactly occupies* $$R$$.
- One spatial part of mine is *exactly located in/exactly occupies* $$S$$.

Here is a parallel account for time:

Something **perdures** iff it persists by having different temporal parts, or stages, at different times ...

- I have temporal parts, which *are exactly located at/exactly occupy* times within the 20th century
- I have temporal parts, which *are exactly located at/exactly occupy* times within the 20th century

To persist, in sum, is to have temporal parts exactly located at, and only at, certain times. 

By times, we may mean both time instants and extended time intervals.

### Endurance

Something **endures** iff it persists by being wholly present at more than one time.

- I have *been wholly present at* times within the 20th century
- I have *been wholly present at* times within the 21st century

But what exactly is to be *wholly present at* a time or a temporal interval?

**First pass** ...

- For an object to be *wholly present at* a time is for *all* its parts to be present at that time.

This will give rise to what will call **mereological endurance**

**Second pass** ...

- For an object to be *wholly present at* a time is for the object to be exactly located at that time.

This will give rise to what we will call **locational endurance**

This is what the models look like:

![index-fig7](https://plato.stanford.edu/archives/fall2018/entries/location-mereology/index-fig7.png)

All illustrations come from the SEP entry on *location and mereology*.

Both the spatial counterpart of mereological and locational endurance are very implausible. Recall that there are regions $$R$$ and $$S$$ near the floor and one meter above ground, respectively such that

- I'm *present in/occupy* region $$R$$
- I'm *present in/occupy* region $$S$$.

Here is what the alternative conceptions of spatial extension might look like:

- I'm *wholly present in* region $$R$$

  All of my parts are *present in/occupy* $$R$$.

  I'm *exactly located* in $$R$$.

- I'm *wholly present in* region $$S$$

  All of my parts are *present in/occupy* $$R$$.

  I'm *exactly located* in $$R$$.

None of them look particularly attractive, especially because we my conjecture:

**Functionality**. Nothing has more than one exact location.

## Location

The debate is marred by imprecison, since different parties use different locative expressions in subtle different ways:

*occupies/is present at/is located at/is wholly present/is exactly located at/exacly occupies/exists at/ ...*

We may now proceed to offer a framework for location.



![index-fig1](https://plato.stanford.edu/archives/fall2018/entries/location-mereology/index-fig1.png)

**Weak Location**

We momentarily take weak location as a primitive locative relation. Notice that $$r$$, $$s$$, etc are locations, but we remain neutral as to whether they are *spatial* or *temporal* or even *spatiotemporal* locations.

By way of elucidation, not definition, we may say that $$x$$ is *weakly located* at $$r$$ ($$x @_\circ r$$) if $$r$$ is not free of $$x$$. This is again not a definition but merely an elucidation.

- $$d @_\circ r_5$$
- $$d @_\circ r_2$$
- $$d @_\circ r_4$$
- $$d @_\circ r_3$$

**Pervasive Location**

We may define this in terms of weak location:

- $$x @_> r:= \forall s (r \circ s \to x @_\circ s)$$

That is, $$x$$ *pervades* $$r$$ if $$x$$ is weakly located at every location $$r$$ overlaps.

- $$d @_> r_5$$
- $$d @_> r_4$$

**Entire Location**

We may define this in terms of weak location and mereology:

- $$x @_< r:= \forall s (x @_\circ s \to r \circ s)$$

That is, $$x$$ *is entirely located at* $$r$$ if $$x$$ is weakly located *only* at locations $$r$$ overlaps.

- $$d @_< r_3$$
- $$d @_< r_4$$

**Perfect Location**

- $$d @_= r_4$$

We may define this in terms of weak location and mereology:

- $$x @_= r:= \forall s (x @_\circ s \leftrightarrow r \circ s)$$

That is, $$x$$ is *perfectly located at* $$r$$ if, and only if, $$x$$ both *pervades* and is *entirely located at* $$r$$.

We can now derive:

**Functionality**. If $$x @_= r$$ and $$x @_= s$$, then $$r = s$$.

If $$x @_= r$$ and $$x @_= s$$, then
$$
\forall t (r \circ t \leftrightarrow r \circ s)
$$
Two locations overlap exactly the same locations only if they are one and the same location. (This is codified by a principle of weak supplementation for regions.)

Parsons adopts one further axiom:

**Exactness**. If $$x@_\circ r$$ for some $$r$$, then there is some $$s$$ such that $$x@_= s$$.

That is, something has a weak location only if it has a perfect location. How could this fail to be the case?

### Being wholly located

What exactly is for an object to be *wholly located at* a region $$r$$?
$$
x @_\blacktriangleleft r := \forall y (y \leq x \to y @_\circ r)
$$
That is, $$x$$ *is wholly located at* $$r$$ if every part of $$x$$ is weakly located at $$r$$.

This relation is not to be confused with *entire location*. Consider the diagram below in which $o_1$ is a scattered simple without proper parts. That is, $o_1$ is itself the only part of $o_1$.

<img src="https://plato.stanford.edu/archives/fall2018/entries/location-mereology/index-fig6a.png" alt="index-fig6a" style="zoom:25%;" />

Now:

- $$o_1$$ is **not** *entirely located* at $$r_1$$, since $$o_1$$ is weakly located at $$r_2$$ and $$r_1$$ fails to overlap $$r_2$$.
- $$o_1$$ is *wholly located* at $$r_1$$, since *every part* of $$o_1$$, namely, $$o_1$$ itself, is weakly located at $$r_1$$.

### Mereological Endurance

That suggests a mereological characterization of endurance. But first, we will restrict attention to *temporal* as opposed to *spatial* or *spatiotemporal* locations. Notice, for example, that two different objects may share the same *temporal* location even if they differ with respect to their *spatial* or *spatiotemporal* locations.

Something **persists**, iff it is weakly located at disjoint times.

- I'm weakly located at times within the 20th century
- I'm weakly located at times within the 21st century
- Times within the 20th century do not overlap with times within the 21st century.

Times or temporal locations could be either time instants or temporal intervals.

Something *perdures* if, and only if, it persists, and no part of it is wholly temporally located at two, disjoint times.

If I perdure, then I have different temporal parts at different times. These temporal parts are wholly temporally located at some of the times at which I'm weakly located.

- A *temporal part* of an object $$o$$ at a time $$t$$ is a *fusion* of the parts of $$x$$, which are wholly temporally located at $$t$$.

My present temporal part, for example, includes as a part

- every part of me that is wholly located at the present time,

and all of its parts 

- overlap parts of me that are wholly located at the present time.

Something mereologically **endures throughout** iff it is wholly located at every time at which it weakly located.

So, if I endure, then I'm wholly located at every time at which I'm weakly located. 

### Locational Endurance

Is there room for locational endurance? Here is how Cody Gilmore glosses the model:

> At least some material objects persist through time; and every material object is temporally unextended and wholly present at each instant at which it exists at all. Moreover, it is not the case that every material object has a different instantaneous temporal part at each different instant at which it exists.

And this is how Parsons describes what he takes to be a misguided reaction to his own characterization of endurance:

> According to these people, an enduring object is not one that is wholly located at each of many disjoint times, but one that is exactly located at each of many disjoint times.

On that view, we would say:

- I have been *exactly located at* times within the 20th century
- I have been *exactly located at* times within the 20th century

Yet, exact location has been conspicuously absent from our discussion.

#### How to Make Sense of Multilocation

One approach to the problem is to observe that there is no room for the distinction between the two models of endurance in the framework we have outlined. To return to the spatial case again, we want to draw a distinction between the case of an extended simple and a multilocated simple:

| Extended Simple                                              | Multilocated Simple                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://plato.stanford.edu/entries/location-mereology/figure05a.svg" alt="Figure 5a diagram: link to extended description below" style="zoom:150%;" /> | <img src="https://plato.stanford.edu/entries/location-mereology/figure05b.svg" alt="img" style="zoom:150%;" /> |

While $o_1$ is an extended simple, $o_2$ is a multilocated simple: $o_2$ is *exactly located* at $r_3$ and $r_4$. This is the spatial counterpart of the contrast between the mereological and the locational model of endurance. The problem is that we lack the machinery to make sense of that distinction, since the patterns of exemplification of the part whole relation and that of weak location appears to be the same in both cases:

| Extended Simple                                              | Multilocated Simple                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| $$o_1 @_\circ r_1$$, $$o_1 @_\circ r_2$$                         | $$o_2 @_\circ r_3$$, $$o_2 @_\circ r_4$$                         |
| $$x \leq o_1 \to x @_\circ r_1$$ $$x \leq o_1 \to x @_\circ r_2$$ Etc | $$x \leq o_2 \to x @_\circ r_3$$ $$x \leq o_2 \to x @_\circ r_4$$ Etc |

#### Free of

Weak location is elucidated in terms of the free of relation: for me to be weakly located in the room is for the room not to be free of me. Parsons conceives of the free of relation as a binary relation between a location and an occupant, but we may be able to do better if we take the free of relation as a perfectly general topic-neutral relation: $\alpha$ is free of $\beta$, which we will symbolize $\alpha \ \sharp \ \beta$. We use Greek variables as placeholders for variables over occupants and locations. For example:

- The room is not free of me. Nor am I free of the room.
- Neither the statue nor the clay is free of each other.
- My singleton is not free of me. Nor am I free of my singleton.
- Two adjacent regions are not free of each other.

To be free of something is *not just* to ...

- be numerically distinct from it

  The room and I are numerically distinct, yet we are not free of each other.

- to have no parts in common with it

  My singleton and I have no parts in common, yet we are not free of each other.

We take the free of relation as basic and governed by three main axioms:

$$ \begin{align} \neg \alpha \ \sharp \ \alpha & & \text{Irreflexivity}\\ \alpha \ \sharp \ \beta \to \beta \ \sharp \ \alpha & & \text{Symmetry}\\ \alpha \leq \beta \to \forall \gamma(\neg \gamma \ \sharp \ \alpha \to \neg \gamma \ \# \ \beta) & & \text{Monotonicity} \end{align} $$

More tentatively:

$$ \begin{align} \neg \gamma \ \sharp \ \alpha + \beta \to \neg \gamma \ \sharp \ \alpha \vee \neg \gamma \ \sharp \ \beta & & \text{Delegation} \end{align} $$

One important consequence:

- If $$\alpha \ \sharp \ \beta$$, then $$\alpha$$ and $$\beta$$ have no parts in common.

We do not generally have the converse:

- The room and I lack parts in common, yet we are not free of each other.
- My singleton and I lack parts in common, yet we are not free of each other.

We do not even have the converse when we restrict attention to locations. In a region-based account of spatial regions:

- Two adjacent regions lack parts in common, yet they are not free of each other.

**Weak Location**

Weak location obtains between an occupant $$x$$ and a location $r$.

For $$x$$ to be *weakly located* at $$r$$, $$x @_\circ r$$, is for $$x$$ to not be free of $$r$$. That is, $$x @_\circ r$$ if, and only if, $$\neg r \ \sharp \ x$$.

Monotonicity and Delegation deliver:

$$ \begin{align} x \leq y \to \forall R (x @_{\circ} R \to y @_{\circ} R) & & \text{Inheritance}\\ R \leq S \to \forall x (x @_{\circ} R \to y @_{\circ} S) & & \text{Locational Inheritance}\\ x @_\circ R_1 + R_2 \to x @_\circ R_1 \vee x @_\circ R_2 & & \text{Delegation} \end{align} $$

**Weak Entire Location**

We now define a relation of *weak entire location*:

$$ x@^{-}_< R := x @_\circ R \wedge \forall S (x @_\circ S \to \neg R \  \sharp \ S)  $$

That opens the way for a distinction between the cases we discussed above:

| Extended Simple                                              | Multilocated Simple                                          |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="https://plato.stanford.edu/entries/location-mereology/figure05a.svg" alt="img" style="zoom:150%;" /> | <img src="https://plato.stanford.edu/entries/location-mereology/figure05b.svg" alt="img" style="zoom:150%;" /> |

One could perhaps suggest that $$o_1$$ is weakly entirely located in *both* $$r_1$$ and $$r_2$$ partly because no region that overlaps $$r_2$$ is free of $$r_1$$ and vice versa. On the other hand, $$o_2$$ is not weakly entirely located in either $$r_3$$ or $$r_4$$ partly because the regions in question are free of each other.

**Containment**

In cases of multilocation, we may take the very occupant to partly explain the link between the relevant locations. We write that $x$ is *contained* in $$r$$ if, and only if, $$x$$ is weakly located at $$s$$ and only regions that are not free of $$r$$ via $$x$$.

$$ x@_\prec r := x @_\circ r \wedge \forall s(x @_\circ s\to \neg r \  \sharp_{x} \ s) $$

Part of the reason $o_1$ is contained in $r_1$ and $r_2$ is that is that they are not free of each other via $o_1$, whereas $r_3$ and $r_4$ are free of each other via $o_2$.

**Perfect Containment**

We are now in a position to define a relation of *perfect containment*, which $$o_1$$ bears to both $$r_1$$ and $$r_2$$ but $$o_2$$ only bears to $$r_3 + r_4$$. We will write that $$x$$ is *perfectly contained* in $$r$$ if, and only if $x$ pervades $$r$$ and $$r$$ contains $$x$$.

$$ x@_\approx r := x @_\prec r \wedge x @_> r$$

We now have the means to characterize locational endurance:

- $$x$$ *endures* if and only if $$\exists t \exists r (\neg t \circ r \wedge x @_\approx t \wedge x @_\approx r)$$

This definition allows for mixed cases in which a continuant endures by being perfectly contained only at some of the times at which it exists. To rule that out, we may say that an object endures throughout if it is perfectly contained in every time at which it exists.

- $$x$$ *endures throughout* if and only if $$x$$ persists and $$\forall t(x@_\circ t \to x @_\approx t)$$.
