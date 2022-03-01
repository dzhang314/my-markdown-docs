# Notes on Group Theory {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>


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
**Definition: Abelian Group**
:::
::: card-body
An ___abelian group___ is a group $\alg{G; 1, {}^{-1}, \cdot}$ that satisfies the following additional requirement:

 * ___Commutative property___: $x \cdot y = y \cdot x$ for all $x, y \in G$.
:::
::::::
