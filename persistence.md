---

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

