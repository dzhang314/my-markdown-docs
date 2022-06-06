# Notes on Elementary Number Theory {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



In these notes, we assume that the reader is familiar with the set of ___integers___, denoted by $\Z \coloneqq \{ \dots, -2, -1, 0, 1, 2, \dots \}$, along with the unary operation of ___negation___ $-: \Z \to \Z$ and the binary operations of ___addition___ and ___multiplication___ $+, \times: \Z \times \Z \to \Z$. As is usual in higher mathematics, we will not explicitly write the multiplication sign $\times$; instead, we denote the product of $x$ and $y$ simply by juxtaposition, as in $xy$. We will also write $x - y$ to abbreviate the expression $x + (-y)$.

We state without proof the following facts about the arithmetic operations $+, -, \times$ on $\Z$. (Giving full proofs of these statements would require us to work with rigorous, axiomatic definitions of the set $\Z$ and the functions $+$, $-$, and $\times$, which are surprisingly both difficult to construct and cumbersome to understand. We refer the interested reader to [the Wikipedia article on the construction of the integers](https://en.wikipedia.org/wiki/Integer#Construction).)

:::::: card
::: card-header
**Elementary Properties of Integer Arithmetic**
:::
::: card-body
**Theorem:** The following statements hold for all $a, b, c \in \Z$.

 * **Commutative property of addition:** $a + b = b + a$.
 * **Cancellation property of addition:** $a + b = a + c$ if and only if $b = c$.
 * **Additive identity property:** $a + 0 = a$.
 * **Additive inverse property:** $a - a = 0$.
 * **Commutative property of multiplication:** $a b = b a$.
 * **Cancellation property of multiplication:** If $ab = ac$ and $a \ne 0$, then $b = c$.
 * **Multiplicative identity property:** $1a = a$.
 * **Zero-product property:** $ab = 0$ if and only if $a = 0$ or $b = 0$.
 * **Distributive property:** $a (b + c) = ab + ac$.
:::
::::::

:::::: card
::: card-header
**Definition: Divisibility, $a \mid b$**
:::
::: card-body
Let $a, b \in \Z$. We say that ___$a$ divides $b$___, denoted by $a \mid b$, if there exists an integer $c \in \Z$ such that $b = ac$.
:::
::::::

:::::: card
::: card-header
**Elementary Properties of Divisibility**
:::
::: card-body
**Theorem:** The following statements hold for all $k, m, n \in \Z$.

 * $1 \mid n$ and $-1 \mid n$.
 * $0 \mid n$ if and only if $n = 0$.
 * If $k \mid m$ and $k \mid n$, then $k \mid m + n$.
 * If $k \mid m$ or $k \mid n$, then $k \mid mn$.
 * If $k \mid m$ and $m \mid n$, then $k \mid n$.
:::
------
::: card-body
*Proof:* Let $k, m, n \in \Z$ be given.

 * $n = 1n = (-1)(-n)$.
 * $0a = 0$ for all $a \in \Z$, so we can write $n = 0a$ for some $a \in \Z$ if and only if $n = 0$.
 * If $m = ak$ and $n = bk$ for some $a, b \in \Z$, then $m + n = (a + b)k$.
 * If $m = ak$ for some $a \in \Z$, then $mn = (an)k$. Similarly, if $n = bk$ for some $b \in \Z$, then $mn = (mb)k$.
 * If $m = ak$ and $n = bm$ for some $a, b \in \Z$, then $n = (ab)k$. &qed;
:::
::::::

:::::: card
::: card-header
**Definition: Modular Congruence, $x \equiv y \pmod{k}$**
:::
::: card-body
Let $x, y, k \in \Z$. We say that ___$x$ is congruent to $y$ modulo $k$___, denoted by $x \equiv y \pmod{k}$, if $k \mid x - y$.
:::
::::::

--------------------------------------------------------------------------------

In this section, we will study the theory of quadratic residues, which answers the following question: when does an element of $\Z/p\Z$ have a square root in $\Z/p\Z$?

:::::: card
::: card-header
**Definition: Quadratic Residue**
:::
::: card-body
Let $x, k \in \Z$. We say that ___$x$ is a quadratic residue modulo $k$___ if there exists an integer $y \in \Z$ such that $x \equiv y^2 \pmod{k}$.
:::
::::::

:::::: card
::: card-header
**Quadratic Residues of Quadratic Forms**
:::
::: card-body
**Theorem:** Let $a, b, c, k, x, y \in \Z$. If $k \mid ax^2 + bxy + cy^2$ and $\gcd(k, x) = 1$ or $\gcd(k, y) = 1$, then $b^2 - 4ac$ is a quadratic residue modulo $k$.
:::
------
::: card-body
*Proof:* By swapping $x$ and $y$ if necessary, we may assume without loss of generality that $\gcd(k, y) = 1$. This implies that $y$ has a modular inverse $z \in \Z$ satisfying $yz \equiv 1 \pmod{k}$. It follows that:

$$ \begin{aligned}
0 &= 4az^2 \cdot 0 \\
&\equiv 4az^2(ax^2 + bxy + cy^2) &\pmod{k} \\
&= 4a^2x^2z^2 + 4abxz + 4ac & \\
&= 4a^2x^2z^2 + 4abxz + b^2 - (b^2 - 4ac) & \\
&= (2axz + b)^2 - (b^2 - 4ac) & \\
\end{aligned} $$

Thus, we have proven $b^2 - 4ac \equiv (2axz + b)^2 \pmod{k}$, which shows that $b^2 - 4ac$ is a quadratic residue modulo $k$. &qed;

:::
::::::

--------------------------------------------------------------------------------

:::::: card
::: card-header
**Definition: Diophantine Equation**
:::
::: card-body
A ___Diophantine equation___ is a polynomial equation with integer coefficients, in any (finite) number of variables, for which we seek integer solutions.
:::
::::::

For example, the following equations could all be Diophantine equations (if we add the stipulation that we are looking for integer solutions):

$$ x + y = 5 $$
$$ a^2 + b^2 = c^2 $$
$$ 3x^2 y^4 + 10z(5 - xz) = 6xyz^2 $$

However, the following equations are not considered Diophantine equations, even if we stipulate that we are only interested in integer solutions:

$$ 2^x + y = 31 $$
$$ \sin(a) + \exp(b) = 0 $$
$$ \frac{1}{4} x^2 + \pi y^3 z = \sqrt{2z} $$

Note that, by moving all terms to the left-hand side, every Diophantine equation can be written in the form

$$ P(x_1, \dots, x_n) = 0 $$

for some polynomial $P \in \Z[x_1, \dots, x_n]$. Unless otherwise specified, we will assume that all Diophantine equations are presented in this form.

:::::: card
::: card-header
**Definition: Solution, Satisfiable, Unsatisfiable**
:::
::: card-body
Let $n \in \N$ and $P \in \Z[x_1, \dots, x_n]$. A ___solution___ of the Diophantine equation $P(x_1, \dots, x_n) = 0$ is a point $(s_1, \dots, s_n) \in \Z^n$ for which $P(s_1, \dots, s_n) = 0$. We say that the Diophantine equation $P(x_1, \dots, x_n) = 0$ is ___satisfiable___ if it has a solution in $\Z^n$; otherwise, we say that the equation $P(x_1, \dots, x_n) = 0$ is ___unsatisfiable___.
:::
::::::

:::::: card
::: card-header
**Definition: Linear Variable, Occurs Linearly**
:::
::: card-body
Let $n \in \N$. We say that a polynomial $P \in \Z[x_1, \dots, x_n]$ contains a ___linear variable___ if, after some permutation of the variables $x_1, \dots, x_n$, we can write $P(x_1, \dots, x_n)$ in the form

$$ P(x_1, \dots, x_n) = a x_1 x_2^{j_2} \cdots x_k^{j_k} + Q(x_{k+1}, \dots, x_n) $$

for some $a \in \Z$, $k, j_2, \dots, j_k \in \N$, and $Q \in \Z[x_{k+1}, \dots, x_n]$. If this is the case, then we say that the variable $x_1$ ___occurs linearly___ in $P$.
:::
::::::

Note that this notion of "linearity" is **not** equivalent to $x_1$ having degree $1$ in $P$, which is necessary but not sufficient.

If a polynomial $P \in \Z[x_1, \dots, x_n]$ contains a linear variable, say $x_1$, then the corresponding Diophantine equation

$$ P(x_1, \dots, x_n) = a x_1 x_2^{j_2} \cdots x_k^{j_k} + Q(x_{k+1}, \dots, x_n) = 0 $$

is satisfiable if and only if it is possible for $Q(x_{k+1}, \dots, x_n)$ to be a multiple of $a$. This can be tested algorithmically by computing $Q(x_{k+1}, \dots, x_n)$ modulo $a$ for all values of $x_{k+1}, \dots, x_n \in \{0, \dots, a - 1\}$.

:::::: card
::: card-header
**Definition: Divisible Variable, Occurs Divisibly**
:::
::: card-body
Let $n \in \N$. We say that a polynomial $P \in \Z[x_1, \dots, x_n]$ contains a ___divisible variable___ if, after some permutation of the variables $x_1, \dots, x_n$, we can write $P(x_1, \dots, x_n)$ in the form

$$ P(x_1, \dots, x_n) = x_1 Q(x_2, \dots, x_n) + a $$

for some $a \in \Z$ and $Q \in \Z[x_2, \dots, x_n]$. If this is the case, then we say that the variable $x_1$ ___occurs divisibly___ in $P$.
:::
::::::

If a polynomial $P \in \Z[x_1, \dots, x_n]$ contains a divisible variable, say $x_1$, then the corresponding Diophantine equation

$$ P(x_1, \dots, x_n) = x_1 Q(x_2, \dots, x_n) + a = 0 $$

is satisfiable if and only if it is possible for $Q(x_2, \dots, x_n)$ to be a (positive or negative) divisor of $a$. This reduces the original Diophantine equation $P(x_1, \dots, x_n) = 0$ to a finite disjunction of Diophantine equations $Q(x_2, \dots, x_n) - b = 0$ in one fewer variable, one for each divisor $b$ of $a$.
