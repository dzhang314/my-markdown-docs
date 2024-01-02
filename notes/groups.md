# Notes on Group Theory

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



## Introduction

Group theory is the first subject in a field of mathematics known as ___abstract algebra___ or ___modern algebra___. Abstract algebra is one of the main branches of modern pure mathematics, and every mathematician, scientist, or engineer who wants a firm understanding of theoretical foundations should know a thing or two about group theory.

The goal of abstract algebra is to study the properties of algebraic systems and the interrelations between them. For example, you probably know about a handful of different number systems, including the integers $\Z$, the rational numbers $\Q$, the real numbers $\R$, and possibly the complex numbers $\C$. You may have also learned about their ___algebraic properties___, such as the ___commutative property___ of addition, $x + y = y + x$, and the ___associative property___ of multiplication, $x \cdot (y \cdot z) = (x \cdot y) \cdot z$.

In abstract algebra, we will go beyond these familiar number systems to study the properties of algebraic systems in general. We will learn how these properties can inform us about the structure of an unknown algebraic system, and we will see how this knowledge can be used to quickly and easily solve problems that would otherwise be difficult or tedious.

To begin our study of abstract algebra, we will focus on one particular type of algebraic system, known as a ___group___. Groups are an ideal starting point because they strike an excellent balance between simplicity and complexity. They are straightforward to define, involving only a single binary operation, and yet they capture most of the key ideas used to study more complicated algebraic structures. In addition, groups are widely used in both pure and applied contexts. Group theory plays a foundational role not only in abstract algebra itself, but also in mathematical analysis, combinatorics, cryptography, physics, chemistry, and materials science.



## Groups

:::::: card
::: card-header
**Definition: Group**
:::
::: card-body
A ___group___ is an algebraic structure $\alg{G; 1, {}^{-1}, \cdot}$ consisting of:

 * a set $G$, called the ___underlying set___;
 * a distinguished element $1 \in G$, called the ___identity element___;
 * a unary operation ${}^{-1}: G \to G$, written as $x \mapsto x^{-1}$, called ___inversion___;
 * a binary operation $\cdot : G \times G \to G$, written as $(x, y) \mapsto x \cdot y$, called the ___group operation___ or ___group product___;

satisfying the following requirements:

 * ___Associative property___: $(x \cdot y) \cdot z = x \cdot (y \cdot z)$ for all $x, y, z \in G$.
 * ___Identity property___: $1 \cdot x = x$ for all $x \in G$.
 * ___Inverse property___: $x^{-1} \cdot x = 1$ for all $x \in G$.
:::
::::::

The ___commutative property___ $(x \cdot y = y \cdot x)$ is conspicuously absent from the definition of a group.

:::::: card
::: card-header
**Identity is the Only Idempotent**
:::
::: card-body
**Theorem:** Let $\alg{G; 1, {}^{-1}, \cdot}$ be a group. The only element $x \in G$ having the property that $x \cdot x = x$ is the identity element.
:::
------
::: card-body
*Proof:* First, to see that the identity element $1 \in G$ actually has the claimed property, observe that $1 \cdot 1 = 1$ follows from the identity property.

Next, to see that no other element of $G$ has this property, let $x \in G$ be given, and suppose $x \cdot x = x$. By multiplying both sides by $x^{-1}$ on the left, we have $x^{-1} \cdot (x \cdot x) = x^{-1} \cdot x$, from which it follows that:

$$ x = 1 \cdot x = (x^{-1} \cdot x) \cdot x = x^{-1} \cdot (x \cdot x) = x^{-1} \cdot x = 1 $$

Thus, we have proven that $x \cdot x = x$ implies $x = 1$. &qed;
:::
::::::

:::::: card
::: card-header
**Right Inverse Property**
:::
::: card-body
**Theorem:** Let $\alg{G; 1, {}^{-1}, \cdot}$ be a group. For all $x \in G$, we have $x \cdot x^{-1} = 1$.
:::
------
::: card-body
*Proof:* Let $x \in G$ be given. We know, from the definition of a group, that $x^{-1} \cdot x = 1$ and $1 \cdot x^{-1} = x^{-1}$. It follows that:

$$ x \cdot x^{-1} = x \cdot (1 \cdot x^{-1}) = x \cdot ((x^{-1} \cdot x) \cdot x^{-1}) = x \cdot (x^{-1} \cdot (x \cdot x^{-1})) = (x \cdot x^{-1}) \cdot (x \cdot x^{-1}) $$

This shows that the element $x \cdot x^{-1} \in G$ remains unchanged when it is multiplied by itself. Using the previous result, this proves that $x \cdot x^{-1} = 1$. &qed;
:::
::::::

:::::: card
::: card-header
**Right Identity Property**
:::
::: card-body
**Theorem:** Let $\alg{G; 1, {}^{-1}, \cdot}$ be a group. For all $x \in G$, we have $x \cdot 1 = x$.
:::
------
::: card-body
*Proof:* Let $x \in G$ be given. We know, from the definition of a group, that $x^{-1} \cdot x = 1$ and $1 \cdot x = x$. It follows that:

$$ x \cdot 1 = x \cdot (x^{-1} \cdot x) = (x \cdot x^{-1}) \cdot x = 1 \cdot x = x $$
This proves that $x \cdot 1 = x$. &qed;
:::
::::::



## Subgroups

:::::: card
::: card-header
**Definition: Subgroup, $H \le G$**
:::
::: card-body
Let $\alg{G; 1, {}^{-1}, \cdot}$ be a group. A ___subgroup___ of $\alg{G; 1, {}^{-1}, \cdot}$ is a subset $H \subseteq G$ of its underlying set that satisfies the following requirements:

 * $1 \in H$.
 * If $x \in H$, then $x^{-1} \in H$.
 * If $x, y \in H$, then $x \cdot y \in H$.

We write $H \le G$ to denote that $H$ is a subgroup of $\alg{G; 1, {}^{-1}, \cdot}$.
:::
::::::

In other words, $H$ is a subgroup of $G$ if and only if the structure $\alg{H; 1, {}^{-1}|_H, \cdot|_H}$ is a group in its own right, where ${}^{-1}|_H$ and $\cdot|_H$ denote the inverse operation ${}^{-1}$ and the group operation $\cdot$ restricted to $H$ and $H \times H$, respectively.

This definition introduces an important notational convention. We will often refer to a group $\alg{G; 1, {}^{-1}, \cdot}$ simply by the name of its underlying set $G$, omitting explicit mention of the identity element, the inversion operation, and the group operation.

It is also common in the mathematics literature to not use any symbol, such as $x \times y$ or $x \cdot y$, to denote the binary operation in a group. Instead, most mathematicians simply write $xy$, using _juxtaposition_ to indicate application of the group operation. Note that the associative property allows us to write expressions like $xyz$ without needing to specify which product should be evaluated first, since both $(xy)z$ and $x(yz)$ are guaranteed to produce the same result.


--------------------------------------------------------------------------------


:::::: card
::: card-header
**Definition: Commute, Commutes**
:::
::: card-body
Let $G$ be a group. We say that two elements $x, y \in G$ ___commute___, or we say that $x$ ___commutes___ with $y$, if $xy = yx$.
:::
::::::


:::::: card
::: card-header
**Definition: Central Element, Center, $Z(G)$**
:::
::: card-body
Let $G$ be a group. An element $x \in G$ is ___central___ if $x$ commutes with every element of $G$. The set of all central elements of $G$ is called the ___center___ of $G$, and is denoted by $Z(G)$.

$$ Z(G) \coloneqq \{ x \in G : \forall y \in G,\ xy = yx \} $$
:::
::::::


:::::: card
::: card-header
**Definition: Abelian Group**
:::
::: card-body
An ___abelian group___ is a group $\alg{G; 1, {}^{-1}, \cdot}$ that satisfies the following additional requirement:

 * ___Commutative property___: $x \cdot y = y \cdot x$ for all $x, y \in G$.
:::
::::::


--------------------------------------------------------------------------------


:::::: card
::: card-header
**Definition: Left Coset, Right Coset, $G/H$, $H \backslash G$**
:::
::: card-body
Let $G$ be a group, and let $H \le G$ be a subgroup. A ___left coset___ of $H$ is a set of the form

$$ gH \coloneqq \{ gh : h \in H \} $$

for some fixed element $g \in G$. Similarly, a ___right coset___ of $H$ is a set of the form

$$ Hg \coloneqq \{ hg : h \in H \} $$

for some fixed element $g \in G$. The collection of all left cosets of $H$ is denoted by $G/H$, while the collection of all right cosets of $H$ is denoted by $H \backslash G$.
:::
::::::


This definition introduces a new notational convention. Whenever we apply a group operation, such as $gH$ or $H^{-1}$, to a _subset_ of a group, we mean the set formed by applying that operation to each element of the subset. For example:

$$ \begin{aligned}
gH &\coloneqq \{ gh : h \in H \} \\
H^{-1} &\coloneqq \{ h^{-1} : h \in H \} \\
g_1 H g_2 &\coloneqq \{ g_1 h g_2 : h \in H \}
\end{aligned} $$

Note that we can write $g_1 H g_2$ without ambiguity, since the associative property guarantees that $(g_1 H) g_2 = g_1 (H g_2)$.


:::::: card
::: card-header
**Definition: Index, $\abs{G:H}$**
:::
::: card-body
Let $G$ be a group, and let $H \le G$ be a subgroup. The ___index___ of $H$ in $G$, denoted by $\abs{G:H}$, is the cardinality of the
:::
::::::


:::::: card
::: card-header
**Cosets Partition a Group**
:::
::: card-body
**Theorem:** Let $G$ be a group, and let $H \le G$ be a subgroup.
:::
------
::: card-body
*Proof:*

Suppose two cosets $xH$ and $yH$ of $H$ intersect, i.e., there exists an element $z \in xH \cap yH$

:::
::::::


:::::: card
::: card-header
**Definition: Normal Subgroup**
:::
::: card-body
Let $G$ be a group. We say that a subgroup $H \le G$ is ___normal___ if for all $g \in G$ and $h \in H$, we have $g^{-1}hg \in H$.
:::
::::::

___left conjugation___ --- this is a left action

$$ {}^g x \coloneqq g x g^{-1} $$

$$ {}^h ({}^g x) = {}^h (g x g^{-1}) = h (g x g^{-1}) h^{-1} = (hg) x (hg)^{-1} = {}^{hg} x $$

___right conjugation___ --- this is a right action

$$ x^g \coloneqq g^{-1} x g $$

$$ (x^g)^h = (g^{-1} x g)^h = h^{-1} (g^{-1} x g) h = (gh)^{-1} x (gh) = x^{gh} $$


:::::: card
::: card-header
**Center is a Subgroup**
:::
::: card-body
**Theorem:** Let $G$ be a group. Its center $Z(G)$ is a subgroup of $G$.
:::
------
::: card-body
*Proof:* We must show that $Z(G)$ contains the identity element $1$ and is closed under taking inverses and products.

 * Clearly, $1 \in Z(G)$, since the identity element $1$ commutes with everything.
 * Let $a \in Z(G)$ and $g \in G$. By definition, we have $ag = ga$. By multiplying on the left and right by $a^{-1}$, we obtain $ga^{-1} = a^{-1}g$. Hence, $a^{-1}$ commutes with $g$. Since $g \in G$ was arbitrary, this proves that $a^{-1} \in Z(G)$.
 * Let $a, b \in Z(G)$ and $g \in G$. Because $a$ and $b$ are central, we can write $abg = agb = gab$. Hence, $ab$ commutes with $g$. Again, because $g \in G$ was arbitrary, this proves that $ab \in Z(G)$. &qed;
:::
::::::


:::::: card
::: card-header
**Center is a Normal Subgroup**
:::
::: card-body
**Theorem:** Let $G$ be a group. Its center $Z(G)$ is a normal subgroup of $G$.
:::
------
::: card-body
*Proof:* Let $g \in G$ and $z \in Z(G)$. Because $z$ is central, we have $g^{-1}zg = zg^{-1}g = z \in Z(G)$. &qed;
:::
::::::
