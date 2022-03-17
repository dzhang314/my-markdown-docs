# Notes on Error-Correcting Codes {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

:::::: card
::: card-header
**Definition: Alphabet, Letter, Symbol**
:::
::: card-body
An ___alphabet___ is a finite set. We call the elements of an alphabet ___letters___ or ___symbols___.
:::
::::::

:::::: card
::: card-header
**Definition: Word, Length, Kleene Star, Kleene Closure, $\Sigma^*$**
:::
::: card-body
A ___word___ over an alphabet $\Sigma$ of ___length___ $n \in \N$ is an element of $\Sigma^n$ (the $n$-fold Cartesian product of $\Sigma$ with itself). The set of all words of any length over $\Sigma$ is called the ___Kleene star___ or ___Kleene closure___ of $\Sigma$, and is denoted by $\Sigma^*$.
:::
::::::

In other words, $\Sigma^* \coloneqq \bigcup_{n \in \N} \Sigma^n$, and length defines a function $\Sigma^* \to \N$ that maps each element of $\Sigma^n$ to $n$.

:::::: card
::: card-header
**Definition: Code, Block Length, Codeword**
:::
::: card-body
A ___code___ over an alphabet $\Sigma$ of ___block length___ $n \in \N$ is a subset of $\Sigma^n$. The elements of a code are called its ___codewords___.
:::
::::::

:::::: card
::: card-header
**Definition: Systematic Encoding Map**
:::
::: card-body
Let $\Sigma$ be an alphabet, and let $n, k \in \N$ with $k \le n$. A ___systematic encoding map___ is a function $f: \Sigma^k \to \Sigma^n$ that has the following property: for any $x \in \Sigma^k$, the first $k$ symbols of $f(x)$ coincide with $x$.
:::
::::::

:::::: card
::: card-header
**Definition: Indicator Function, $1[P]$**
:::
::: card-body
The ___indicator function___ of a logical proposition $P$ is the quantity

$$ 1[P] \coloneqq \begin{cases}
    1 & \text{if } P. \\
    0 & \text{if } \neg P.
\end{cases} $$
:::
::::::

:::::: card
::: card-header
**Definition: Hamming Distance, $\Delta(x, y)$, Relative Hamming Distance, $\delta(x, y)$**
:::
::: card-body
Let $\Sigma$ be an alphabet, and let $n \in \N$.  The ___Hamming distance___ between two words $x, y \in \Sigma^n$ is the quantity

$$ \Delta(x, y) \coloneqq \sum_{i=1}^n \mathbb{1}[x_i \ne y_i]. $$

Similarly, the ___relative Hamming distance___ between $x$ and $y$ is the quantity

$$ \delta(x, y) \coloneqq \frac{\Delta(x, y)}{n} = \frac{1}{n} \sum_{i=1}^n \mathbb{1}[x_i \ne y_i]. $$
:::
::::::

The Hamming distance $\Delta$ and relative Hamming distance $\delta$ are metrics on $\Sigma^n$. In particular, they satisfy the triangle inequality.

:::::: card
::: card-header
**Definition: Message Length, Dimension, Rate, Minimum Distance, Distance, $(n, k, d)_{\abs{\Sigma}}$-Code**
:::
::: card-body
Let $\Sigma$ be an alphabet, and let $n \in \N$.

 * The ___message length___ or ___dimension___ of a code $C \subseteq \Sigma^n$ is the quantity $\log_{\abs{\Sigma}} \abs{C}$.
 * The ___rate___ of a code $C \subseteq \Sigma^n$ is the quantity $(\log_{\abs{\Sigma}} \abs{C}) / n$.
 * The ___minimum distance___ (or simply ___distance___) of a code $C \subseteq \Sigma^n$ is the minimum Hamming distance between its distinct codewords, i.e., $\min\,\{ \Delta(c, c') : c, c' \in C \text{ and } c \ne c' \}$.

A code $C \subseteq \Sigma^n$ with message length $k$ and minimum distance $d$ is called an $(n, k, d)_{\abs{\Sigma}}$-code.
:::
::::::

:::::: card
::: card-header
**Definition: Hamming Ball, $B_{\Sigma^n}(w, r)$, Volume, $\Vol_{\abs{\Sigma}}(r, n)$**
:::
::: card-body
Let $\Sigma$ be an alphabet, and let $n \in \N$. The ___Hamming ball___ in $\Sigma^n$ of radius $r \in \N$ about a word $w \in \Sigma^n$ is the set

$$ B_{\Sigma^n}(w, r) \coloneqq \{ x \in \Sigma^n : \Delta(w, x) \le r \}. $$

The ___volume___ of a Hamming ball is simply its cardinality, and is denoted by

$$\Vol_{\abs{\Sigma}}(r, n) \coloneqq \abs{B_{\Sigma^n}(w, r)}. $$

Note that this quantity is independent of the choice of word $w \in \Sigma^n$.
:::
::::::

$$ \Vol_q(r, n) = 1 + \binom{n}{1} (q - 1) + \binom{n}{2} (q - 1)^2 + \cdots + \binom{n}{r} (q - 1)^r $$

:::::: card
::: card-header
**Definition: Erasure, Error**
:::
::: card-body
**TODO**
:::
::::::

:::::: card
::: card-header
**Minimum Distance is a Proxy for Robustness**
:::
::: card-body
**Theorem:** Let $\Sigma$ be an alphabet, and let $n \in \N$. If a code $C \subseteq \Sigma^n$ has minimum distance $d$, then:

 * $C$ can correct $\le d - 1$ erasures.
 * $C$ can detect $\le d - 1$ errors.
 * $C$ can correct $\le \lfloor \frac{d-1}{2} \rfloor$ errors.
:::
------
::: card-body
*Proof:* **TODO**
:::
::::::

:::::: card
::: card-header
**Hamming Bound**
:::
::: card-body
**Theorem:** Let $\Sigma$ be an alphabet, and let $n \in \N$. If a code $C \subseteq \Sigma^n$ has minimum distance $d$, then its rate $R$ is bounded above by

$$ R \coloneqq \frac{\log_{\abs{\Sigma}} \abs{C}}{n} \le 1 - \frac{\log_{\abs{\Sigma}} \! \left( \Vol_{\abs{\Sigma}} \! \left( \left\lfloor \frac{d-1}{2} \right\rfloor\!, n \right) \right)}{n} $$
:::
------
::: card-body
*Proof:* Let $\mathcal{B} \coloneqq \{ B_{\Sigma^n}(c, \lfloor\!\frac{d-1}{2}\!\rfloor) : c \in C \}$ denote the collection of Hamming balls of radius $\lfloor\!\frac{d-1}{2}\!\rfloor$ about each codeword in $C$. Observe that the members of $\mathcal{B}$ are pairwise disjoint. Indeed, if there were two distinct codewords $c, c' \in C$ whose Hamming balls intersect, say at $\tilde{c} \in B_{\Sigma^n}(c, \lfloor\!\frac{d-1}{2}\!\rfloor) \cap B_{\Sigma^n}(c', \lfloor\!\frac{d-1}{2}\!\rfloor)$, then by definition, we would have $\Delta(c, \tilde{c}) \le \lfloor\!\frac{d-1}{2}\!\rfloor$ and $\Delta(\tilde{c}, c') \le \lfloor\!\frac{d-1}{2}\!\rfloor$. The triangle inequality would then imply

$$ \Delta(c, c') \le \Delta(c, \tilde{c}) + \Delta(\tilde{c}, c') \le \left\lfloor \frac{d-1}{2} \right\rfloor + \left\lfloor \frac{d-1}{2} \right\rfloor \le d - 1, $$

contradicting the hypothesis that $C$ has minimum distance $d$. Now, the members of $\mathcal{B}$ are all subsets of $\Sigma^n$, so it follows that the total cardinality of all of the balls in $\mathcal{B}$ is bounded above by $\abs{\Sigma}^n$.

$$ \abs{C} \Vol_{\abs{\Sigma}} \! \left( \left\lfloor \frac{d-1}{2} \right\rfloor\!, n \right) \le \abs{\Sigma}^n $$

Taking the base-$\abs{\Sigma}$ logarithm of both sides, we obtain:

$$ \log_{\abs{\Sigma}} \abs{C} + \log_{\abs{\Sigma}} \! \left( \Vol_{\abs{\Sigma}} \! \left( \left\lfloor \frac{d-1}{2} \right\rfloor\!, n \right) \right) \le n $$

Dividing both sides by $n$ yields the desired result. &qed;
::::::

:::::: card
::: card-header
**Definition: Perfect Code**
:::
::: card-body
Let $\Sigma$ be an alphabet, and let $n \in \N$. A code $C \subseteq \Sigma^n$ is ___perfect___ if the collection of Hamming balls $\{ B_{\Sigma^n}(c, \lfloor\!\frac{d-1}{2}\!\rfloor) : c \in C \}$ covers $\Sigma^n$, where $d$ denotes the minimum distance of $C$.
:::
::::::

In other words, a code is perfect if it saturates the Hamming bound.

:::::: card
::: card-header
**Definition: Linear Code**
:::
::: card-body
Let $F$ be a finite field. A ___linear code___ of dimension $k \in \N$ and block length $n \in \N$ over $F$ is a $k$-dimensional linear subspace of $F^n$.
:::
::::::

Note that the linear-algebraic notion of dimension coincides with our previous definition of the dimension of a code. If $C$ is a $k$-dimensional linear subspace of $F^n$, then $\abs{C} = \abs{F}^k$, which implies $k = \log_{\abs{F}} \abs{C}$.

:::::: card
::: card-header
**Definition: Generator Matrix, Parity-Check Matrix, Dual, $C^\perp$**
:::
::: card-body
Let $F$ be a finite field, $n, k \in \N$, and let $C \subseteq F^n$ be a linear code of dimension $k$.

 * A ___generator matrix___ for $C$ is a matrix $G \in F^{n \times k}$ whose column space is $C$.
 * A ___parity-check matrix___ for $C$ is a matrix $H \in F^{(n - k) \times k}$ whose kernel is $C$.
 * The ___dual___ of $C$ is the linear code $C^\perp \coloneqq \{ \vd \in F^n : \langle \vc, \vd \rangle = 0_F \text{ for all } \vc \in C \}$.

Here, $\langle \cdot, \cdot \rangle$ denotes the standard inner product on $F^n$, i.e., $\langle \vv, \vw \rangle \coloneqq \sum_{i=1}^n v_i w_i$.
:::
::::::

Because every vector space has a basis, every linear code $C \subseteq F^n$ admits a generator matrix (whose columns are the basis vectors for $C$). In fact, up to permutations of symbol positions within codewords, every linear code admits a generator matrix whose first $k$ rows coincide with the $k \times k$ identity matrix. Such a generator matrix defines a systematic encoding map.

:::::: card
::: card-header
**Gilbert--Varshamov Bound**
:::
::: card-body
**Theorem:** Let $q \in \N$ be a prime power, and let $n, d \in \N$ with $d \le n$. There exists a linear code $C \subseteq (\F_q)^n$ of minimum distance $d$ and rate

$$ R \ge 1 - \frac{\lfloor \log_q(\Vol_q(d - 1, n)) \rfloor + 1}{n}. $$
:::
------
::: card-body
*Proof:* Let $C$ be a uniformly random linear subspace of $(\F_q)^n$ of dimension $k \coloneqq n - \lfloor \log_q(\Vol_q(d-1, n)) \rfloor - 1$. Note that there are only finitely many such subspaces, so this uniform distribution makes sense. We will show that $C$ has minimum distance $\ge d$ with probability $> 0$.

Let $G \in (\F_q)^{n \times k}$ be a uniformly random generator matrix for $C$. Observe that, for any fixed $\vx \in (\F_q)^n \setminus \{\vo\}$, the vector $G\vx$ is uniformly distributed in $(\F_q)^n \setminus \{\vo\}$. Indeed, all of the random choices we have made so far are invariant under a linear isomorphism of $(\F_q)^n$, and there exist isomorphisms of $(\F_q)^n$ that send any nonzero vector to any other nonzero vector, so this random process cannot favor any nonzero vector.

**TODO**
:::
::::::

**Remark:** The Gilbert-Varshamov bound actually holds for any $q \in \N$, not just prime powers. A proof of this stronger result requires a different construction, and the resulting codes are not linear codes.
