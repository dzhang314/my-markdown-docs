# Complexity Theory of Boolean Functions

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

--------------------------------------------------------------------------------

:::::: card
::: card-header
**Definition: Bit, Bit Vector, Length, Boolean Function, Variables**
:::
::: card-body
A ___bit___ is an element of the set $\{0, 1\}$. A ___bit vector___ of ___length___ $n \in \N$ is an element of the set $\{0, 1\}^n$. A ___Boolean function___ on $n \in \N$ ___variables___ is a function $f: \{0, 1\}^n \to \{0, 1\}$ that takes a bit vector of some fixed length $n$ and returns a single bit.
:::
::::::

:::::: card
::: card-header
**Definition: Support**
:::
::: card-body
Let $n \in \N$, and let $f: \{0, 1\}^n \to \{0, 1\}$ be a Boolean function. The ___support___ of $f$, denoted by $\operatorname{supp}(f)$, is the set of all bit vectors $\vx \in \{0, 1\}^n$ for which $f(\vx) = 1$.

$$ \operatorname{supp}(f) \coloneqq \{ \vx \in \{0, 1\}^n : f(\vx) = 1 \} $$
:::
::::::

:::::: card
::: card-header
**Definition: Certificate, Certificate Complexity**
:::
::: card-body
Let $n \in \N$. A ___certificate___ for a Boolean function $f: \{0, 1\}^n \to \{0, 1\}$ at a bit vector $\vx \in \{0, 1\}^n$ is a set $S \subseteq \{1, 2, \dots, n\}$ that has the following property: for all $\vy \in \{0, 1\}^n$, if $\vx_i = \vy_i$ for all $i \in S$, then $f(\vx) = f(\vy)$.

The ___certificate complexity___ of $f$ at $\vx$, denoted by $\mathsf{C}(f, \vx)$, is the minimum of the set of cardinalities of all certificates for $f$ at $\vx$. (Note that this set is nonempty because the full set $\{1, 2, \dots, n\}$ is always a certificate.)

The ___certificate complexity___ of $f$, denoted by $\mathsf{C}(f)$, is the maximum of the set of certificate complexities of $f$ at all bit vectors $\vx \in \{0, 1\}^n$.

$$ \mathsf{C}(f) \coloneqq \max_{\vx \in \{0, 1\}^n} \mathsf{C}(f, \vx) $$
:::
::::::

:::::: card
::: card-header
**Definition: Multilinear, $R \lfloor x_1, x_2, \dots, x_n \rfloor$**
:::
::: card-body
Let $R$ be a commutative rng, and let $n \in \N$. A polynomial $p \in R[x_1, x_2, \dots, x_n]$ is ___multilinear___ if no monomial in the fully-expanded form of $p$ contains any indeterminate $x_1, x_2, \dots, x_n$ raised to any power greater than $1$.

The set of all multilinear polynomials in $R[x_1, x_2, \dots, x_n]$ is denoted by $R \lfloor x_1, x_2, \dots, x_n \rfloor$.
:::
::::::

:::::: card
::: card-header
**Definition: Multilinear Basis Monomial, $x_S$**
:::
::: card-body
Let $R$ be a commutative ring, and let $n \in \N$. Given a set $S \subseteq \{1, 2, \dots, n\}$, we denote by $x_S \in R \lfloor x_1, x_2, \dots, x_n \rfloor$ the ___multilinear basis monomial___ defined as follows:
$$ x_S \coloneqq \prod_{i \in S} x_i. $$
:::
::::::

Note that for any field $F$, the set $F \lfloor x_1, x_2, \dots, x_n \rfloor$ of multilinear polynomials over $F$ is a vector space of dimension $2^n$ with basis $\{x_S : S \subseteq \{1, 2, \dots, n\}\}$.

:::::: card
::: card-header
**Definition: Representation of Boolean Functions by Polynomials**
:::
::: card-body
Let $R$ be a commutative ring, and let $n \in \N$. We say that a polynomial $p \in R[x_1, x_2, \dots, x_n]$ ___represents___ a Boolean function $f: \{0, 1\}^n \to \{0, 1\}$ if $p(\vx) = f(\vx)$ for all bit vectors $\vx \in \{0, 1\}^n$. (Here, when we write $p(\vx)$, we identify the bits $(0, 1)$ with the identity elements $(0_R, 1_R)$ of the ring $R$.)
:::
::::::

:::::: card
::: card-header
**Unique Representation of Boolean Functions by Multilinear Polynomials**
:::
::: card-body
**Theorem:** Let $F$ be a field, and let $n \in \N$. For every Boolean function $f: \{0, 1\}^n \to \{0, 1\}$, there exists a unique multilinear polynomial $p \in F \lfloor x_1, x_2, \dots, x_n \rfloor$ that represents $f$.
:::
------
::: card-body
*Proof:* For existence: sum of generalized AND functions.

For uniqueness: suppose there are two and subtract.
:::
::::::
