# Notes on Ring Theory and Field Theory {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



# Introduction

In these notes, we introduce a new class of algebraic structures, called rngs and rings, whose study is collectively called ___ring theory___. Rngs and rings are more complicated than groups because their definition involves not one, but two binary operations.

:::::: card
::: card-header
**Definition: Rng**
:::
::: card-body
A ___rng___ (pronounced as "rung") is an algebraic structure $\alg{R; 0, -, +, \cdot}$ consisting of:

 * a set $R$, called the ___underlying set___;
 * a distinguished element $0 \in R$, called the ___zero element___;
 * a unary operation $-: R \to R$, written as $x \mapsto -x$, called ___negation___;
 * a binary operation $+: R \times R \to R$, written as $(x, y) \mapsto x + y$, called ___addition___;
 * a binary operation $\cdot: R \times R \to R$, written as $(x, y) \mapsto x \cdot y$, called ___multiplication___;

satisfying the following requirements:

 * ___Additive structure___: $\alg{R; 0, -, +}$ is an abelian group.
 * ___Associativity___: $(x \cdot y) \cdot z = x \cdot (y \cdot z)$ for all $x, y, z \in R$.
 * ___Left distributivity___: $x \cdot (y + z) = (x \cdot y) + (x \cdot z)$ for all $x, y, z \in R$.
 * ___Right distributivity___: $(x + y) \cdot z = (x \cdot z) + (y \cdot z)$ for all $x, y, z \in R$.
:::
::::::

The key ingredient in the definition of a rng is distributivity, which establishes a link between two different binary operations. We begin our study of rngs by proving a simple (but important) result to demonstrate the utility of the distributive property.

:::::: card
::: card-header
**Multiplying by Zero Yields Zero**
:::
::: card-body
**Theorem:** To do.
:::
------
::: card-body
*Proof:* To do. &qed;
:::
::::::

:::::: card
::: card-header
**Definition: Zero Rng**
:::
::: card-body
The ___zero rng___ is the rng $\alg{\{0\}; 0, -, +, \cdot}$ consisting of a single element $0$. The negation, addition, and multiplication operations in the zero rng are defined by $-0 = 0 + 0 = 0 \cdot 0 = 0$.
:::
::::::

:::::: card
::: card-header
**Definition: Trivial Rng, Nontrivial Rng**
:::
::: card-body
 * A rng is ___trivial___ if its underlying set contains only one element.
 * A rng is ___nontrivial___ if its underlying set contains more than one element.
:::
::::::

:::::: card
::: card-header
**Definition: Commutative Rng**
:::
::: card-body
A ___commutative rng___ is a rng $\alg{R; 0, -, +, \cdot}$ that satisfies the following additional requirement:

* ___Commutativity___: $x \cdot y = y \cdot x$ for all $x, y \in R$.
:::
::::::

The word "commutative" in the term "commutative rng" emphasizes that the *multiplication* operation is commutative. By definition, the addition operation is always commutative in every rng.

:::::: card
::: card-header
**Definition: Ring**
:::
::: card-body
A ___ring___ is an algebraic structure $\alg{R; 0, 1, -, +, \cdot}$ consisting of:

 * a set $R$, called the ___underlying set___;
 * a distinguished element $0 \in R$, called the ___zero element___;
 * a distinguished element $1 \in R$, called the ___identity element___;
 * a unary operation $-: R \to R$, written as $x \mapsto -x$, called ___negation___;
 * a binary operation $+: R \times R \to R$, written as $(x, y) \mapsto x + y$, called ___addition___;
 * a binary operation $\cdot: R \times R \to R$, written as $(x, y) \mapsto x \cdot y$, called ___multiplication___;

satisfying the following requirements:

 * ___Rng structure___: $\alg{R; 0, -, +, \cdot}$ is a rng.
 * ___Identity___: $1 \cdot x = x \cdot 1 = x$ for all $x \in R$.
:::
::::::



## Zero Divisors and Inverses

Every rng $R$ has a distinguished element $0_R$. The rng axioms specify what happens when $0_R$ is fed _into_ the operations of addition and multiplication, but they leave unspecified when $0_R$ is produced as an _output_. This is the topic that we will study in this section.

The equation $x + y = 0_R$ is familiar territory---this simply means that $x$ and $y$ are additive inverses, i.e., $x = -y$. On the other hand, the equation $xy = 0_R$ is far more interesting. In the familiar rngs of grade-school arithmetic, including $\Z$, $\Q$, $\R$, and $\C$, the equation $xy = 0$ implies that $x = 0$ or $y = 0$. However, when we study rngs in general, it turns out to be possible for two nonzero elements to multiply into zero. This situation is completely foreign and allows bizarre things to happen in general rngs that have no analogue in $\Z$, $\Q$, $\R$, or $\C$. This phenomenon is so dangerous that mathematicians have assigned it a cautionary name.

:::::: card
::: card-header
**Definition: Zero Divisor, Left/Right/Two-Sided Zero Divisor**
:::
::: card-body
Let $R$ be a rng.
 * An element $a \in R$ is a ___left zero divisor___ if there exists $x \in R$ such that $ax = 0_R$.
 * An element $b \in R$ is a ___right zero divisor___ if there exists $x \in R$ such that $xb= 0_R$.
 * An element of $R$ is a ___zero divisor___ if it is a left zero divisor or a right zero divisor.
 * An element of $R$ is a ___two-sided zero divisor___ if is it both a left zero divisor and a right zero divisor.
::::::

The name "zero divisor" is a rather unfortunate historical convention. We will later learn a definition of the word "divides" under which every element of a rng divides $0_R$. (In fact, you may have already learned this definition if you have previously studied number theory.) You need to remember that, in the context of rng theory, the phrase "zero divisor" is not synonymous with "divides $0_R$."

Zero divisors are so pernicious that mathematicians have concocted a series of names for rings in which they don't exist. Note that these names apply to _rings_, not _rngs_.

:::::: card
::: card-header
**Definition: Domain**
:::
::: card-body
A ___domain___ is a nontrivial ring in which the product of any two nonzero elements is itself nonzero.
:::
::::::

In other words, a domain is a ring that does not contain any (left or right) zero divisors except $0_R$ itself. The most well-studied domains happen to be commutative rings, so there is a special term for a commutative domain.

:::::: card
::: card-header
**Definition: Integral Domain**
:::
::: card-body
An ___integral domain___ is a nontrivial commutative ring in which the product of any two nonzero elements is itself nonzero.
:::
::::::

When we pass from rngs to rings, we gain the new distinguished element $1_R$. This prompts us to ask when $1_R$ is produced as an output of addition or multiplication. Again, the equation $x + y = 1_R$ is rather uninteresting, since it means nothing more than $y = 1_R - x$. However, the equation $xy = 1_R$ merits further investigation. In $\Q$, $\R$, or $\C$, this would simply mean that $x$ and $y$ are inverses, i.e., $x = y^{-1}$; but in a general ring, it is not guaranteed that every nonzero element has an inverse.

:::::: card
::: card-header
**Definition: Invertible, Left-Invertible, Right-Invertible**
:::
::: card-body
Let $R$ be a ring, and let $x \in R$.
 * $x$ is ___left-invertible___ if there exists $\ell \in R$ such that $\ell x = 1_R$. We call such an element $\ell$ a ___left inverse___ of $x$.
 * $x$ is ___right-invertible___ if there exists $r \in R$ such that $xr = 1_R$. We call such an element $r$ a ___right inverse___ of $x$.
 * $x$ is ___invertible___ (or ___two-sided invertible___) if there exists $y \in R$ such that $xy = yx = 1_R$. We call such an element $y$ an ___inverse___ (or ___two-sided inverse___) of $x$, and we write $y = x^{-1}$ to denote this relationship.
::::::

Note that the terms "zero divisor" and "invertible" have opposite usage conventions. When we call something a "zero divisor" without further clarification, we mean that it is a left or right zero divisor; but when we call something "invertible" without further clarification, we mean "two-sided invertible."

In addition, the terms "zero divisor" and "invertible" also have opposite emotional connotations. When we learn that an element of a rng is a zero divisor, we must put ourselves on high alert and remember that the usual laws of arithmetic might not apply (i.e., $xy = 0$ does not imply $x = 0$ or $y = 0$). In contrast, when we learn that an element of a ring is invertible, we can breathe a sigh of relief and divide with impunity. In fact, invertible elements are so useful that we give them another special name.

:::::: card
::: card-header
**Definition: Unit, Group of Units, $R^\times$**
:::
::: card-body
Let $R$ be a ring. An element $u \in R$ is a ___unit___ if there exists an element $v \in R$ such that $uv = vu = 1_R$. The set of all units in $R$ is denoted by $R^\times$, and is called the ___group of units___ of $R$.
::::::

In other words, $R^\times$ is the set of elements of $R$ that have a (two-sided) inverse. We call $R^\times$ the _group_ of units because it is group under the ring's multiplication operation. In particular, we always have $1_R \in R^\times$, and if $u, v \in R^\times$, then $u^{-1} \in R^\times$ (since its inverse is $u$) and $uv \in R^{\times}$ (since its inverse is $v^{-1} u^{-1}$). For example, $\Z^\times = \{\pm 1\}$ and $\Q^\times = \Q \setminus \{0\}$.

Just like domains and integral domains, mathematicians have also concocted names for rings in which every element is invertible. (Actually, it's too much to ask that _every_ element be invertible, since $0_R$ is never invertible in any nontrivial ring $R$, but we can ask that every _nonzero_ element be invertible.)

:::::: card
::: card-header
**Definition: Division Ring, Skew Field**
:::
::: card-body
A ___division ring___ (or ___skew field___) is a nontrivial ring in which every nonzero element is invertible.
:::
::::::

In other words, a ring $R$ is a division ring if $R^\times = R \setminus \{0_R\}$. Like domains, the most well-studied division rings happen to be commutative, so there is a special term for a commutative division ring.

:::::: card
::: card-header
**Definition: Field**
:::
::: card-body
A ___field___ is a nontrivial commutative ring in which every nonzero element is invertible.
:::
::::::



## Under Construction

:::::: card
::: card-header
**Definition: Associate Elements in a Ring**
:::
::: card-body
Let $R$ be a ring. We say that two elements $a, b \in R$ are ___associates___ if there exist $u, v \in R^\times$ such that $a = ubv$.
::::::

Note that, in a commutative ring, this condition simplifies to $a = ub$. In standard algebra textbooks, this definition is usually only stated for commutative rings.

:::::: card
::: card-header
**Associatedness is an Equivalence Relation**
:::
::: card-body
**Theorem:** In any ring $R$, the binary relation of "associatedness" is an equivalence relation on $R$.
:::
------
::: card-body
*Proof:* We need to verify that associatedness is reflexive, symmetric, and transitive. Let $a, b, c \in R$ and $u, v, x, y \in R^\times$.
 * _Reflexivity_: $a = 1_R a 1_R$.
 * _Symmetry_: If $a = ubv$, then $b = u^{-1} a v^{-1}$.
 * _Transitivity_: If $a = ubv$ and $b = xcy$, then $a = (ux)c(yv)$. &qed;
:::
::::::

This shows that every ring can be partitioned into associate classes. Note that $R^\times$ is the associate class of $1_R$, and $\{0_R\}$ is its own associate class.



:::::: card
::: card-header
**Definition: Principal Ideal, Generator**
:::
::: card-body
Let $R$ be a commutative ring, and let $r \in R$. The ___principal ideal___ generated by $r$, denoted by $\gen{r}$, is the subset of $R$ containing all multiples of $r$.

$$ \gen{r} \coloneqq \{ rx : x \in R \} $$

An ideal $I \normalin R$ is ___principal___ if there exists an element $r \in R$ such that $I = \gen{r}$. In this case, we call $r$ a ___generator___ of $I$.
:::
::::::

Note that a principal ideal may have more than one generator. For example, the ideal of even numbers in $\Z$ has two generators, $\gen{2} = \gen{-2}$. Of course, these two generators are quite closely related, since $2$ and $-2$ differ only in sign. The following theorem shows that this is a general phenomenon in the absence of zero divisors.

:::::: card
::: card-header
**Two Generators of the Same Ideal in an Integral Domain are Associates**
:::
::: card-body
**Theorem:** Let $R$ be an integral domain. If two elements $a, b \in R$ generate the same ideal $\gen{a} = \gen{b}$, then $a$ and $b$ are associates.
:::
------
::: card-body
*Proof:* If $\gen{a} = \gen{b} = \{0\}$, then $a = b = 0$, and we are done, since $0$ is certainly associate to itself. Otherwise, $a$ and $b$ are both nonzero. The hypothesis $\gen{a} = \gen{b}$ implies that $a \in \gen{b}$ and $b \in \gen{a}$. Thus, there exist $r, s \in R$ such that $a = rb$ and $b = sa$. It follows that $a = rsa$, or equivalently, $(1 - rs)a = 0$. Since $R$ is an integral domain and $a \ne 0$, we must have $1 - rs = 0$, which shows that $r$ and $s$ are both units in $R$. We therefore conclude from the defining condition $a = rb$ that $a$ and $b$ are associates. &qed;
:::
::::::

In a commutative ring with zero divisors, it can even be the case that a single principal ideal has multiple generators which are not associate to each other. **[TO DO: Add an example.]**

:::::: card
::: card-header
**Definition: Principal Ideal Domain (PID)**
:::
::: card-body
A ___principal ideal domain___, also known as a ___PID___, is an integral domain in which every ideal is principal.
:::
::::::


:::::: card
::: card-header
**Definition: Divides, Divisibility Relation, $a \mid b$**
:::
::: card-body
Let $R$ be a commutative rng, and let $a, b \in R$. We say that $a$ ___divides___ $b$, denoted by $a \mid b$, if there exists an element $q \in R$ such that $b = qa$. This binary relation ${\mid} \subseteq R \times R$ is called the ___divisibility relation___ on $R$.
:::
::::::

The divisibility relation $\mid$ is always reflexive in a ring, but can fail to be reflexive in a rng. Note that $0$ does not divide any element of a rng except $0$, but every element of a rng divides $0$.


:::::: card
::: card-header
**Divisibility is Transitive**
:::
::: card-body
**Theorem:** The divisibility relation on any rng is transitive.
:::
------
::: card-body
Let $R$ be a rng, and let $a, b, c \in R$. If $a \mid b$ and $b \mid c$, then there exist $x, y \in R$ sch that $b = xa$ and $c = yb$. It follows that $c = yxa$, which proves that $a \mid c$. <span class="float-end">&#8718;</span>
:::
::::::


:::::: card
::: card-header
**Definition: Prime Element**
:::
::: card-body
Let $R$ be a commutative ring. An element $p \in R$ is ___prime___ if $p \notin R^\times \cup \{0\}$ and for all $a, b \in R$, if $p \mid ab$, then $p \mid a$ or $p \mid b$.
:::
::::::

The prime elements of the commutative ring $\Z$ are precisely the usual prime numbers $2, 3, 5, 7, \dots$ and their negatives.


:::::: card
::: card-header
**Definition: Irreducible Element**
:::
::: card-body
Let $R$ be a ring. An element $r \in R$ is ___irreducible___ if $r \notin R^\times$ and for all $a, b \in R$, if $r = ab$, then $a \in R^\times$ or $b \in R^\times$.
:::
::::::

Note that, while the notion of an irreducible element is defined in any ring, the notion of a prime element is only defined in a *commutative* ring.

:::::: card
::: card-header
**Definition: Characteristic, $\fchar R$**
:::
::: card-body
Let $R$ be a ring. The ___characteristic___ of $R$, denoted by $\fchar R$, is the smallest positive integer $n$ such that

$$ \underbrace{1_R + 1_R + \cdots + 1_R}_{n \text{ copies of } 1_R} = 0_R. $$

If no such $n$ exists, then we define $\fchar R \coloneqq 0$.
:::
::::::

For example, $\fchar \Z = 0$ and $\fchar(\Z / 4\Z) = 4$.
