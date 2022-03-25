# Notes on Group Theory {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



# Introduction

Group theory is the first subject in a branch of mathematics known as ___abstract algebra___ (or ___modern algebra___). Abstract algebra is one of the main branches of modern pure mathematics, and it is a standard requirement in the university mathematics curriculum. Every professional mathematician and theoretically-oriented physical scientist (i.e., physicists and chemists) should know a thing or two about group theory.

The goal of abstract algebra is to study the general properties of algebraic systems and the interrelations between them. That might not mean a lot if you haven't studied abstract algebra before, so let me contextualize this statement.

In grade school, you learned about a handful of different number systems, including the integers $\Z$, the rational numbers $\Q$, the real numbers $\R$, and possibly (if you were an advanced student) the complex numbers $\C$. You also learned that there are several ___algebraic properties___ that these systems satisfy, such as the ___commutative property___ of addition, $x + y = y + x$, and the ___associative property___ of multiplication, $x \cdot (y \cdot z) = (x \cdot y) \cdot z$.

In abstract algebra, we ask what other number systems support a notion of addition, negation, multiplication, or some other operation, that satisfies the commutative, associative, distributive, etc. property.

Each of the number systems mentioned above supports the four basic arithmetic operations of addition, subtraction, multiplication, and (with the exception of the integers) division. Of course, subtraction and division are merely the inverses of addition and multiplication, so in each case, there are really only two _fundamental_ arithmetic operations. **[TODO: Finish writing introduction.]**


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
 * ___Identity property___: $1 \cdot x = x \cdot 1 = x$ for all $x \in G$.
 * ___Inverse property___: $x \cdot x^{-1} = x^{-1} \cdot x = 1$ for all $x \in G$.
:::
::::::


:::::: card
::: card-header
**Definition: Subgroup**
:::
::: card-body
**TODO**
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
**Definition: Central Element, Center, $Z(G)$**
:::
::: card-body
Let $G$ be a group. An element $g \in G$ is ___central___ if $g$ commutes with every element of $G$. The set of all central elements of $G$ is called the ___center___ of $G$, and is denoted by $Z(G)$.

$$ Z(G) \coloneqq \{ g \in G : \forall h \in G,\ gh = hg \} $$
:::
::::::


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


:::::: card
::: card-header
**Center is a Normal Subgroup**
:::
::: card-body
**Theorem:** Let $G$ be a group. Its center $Z(G)$ is a normal subgroup of $G$.
:::
------
::: card-body
*Proof:* TODO
:::
::::::
