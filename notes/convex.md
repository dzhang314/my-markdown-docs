# Notes on Convex Analysis

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



In these notes, we will develop a generalized form of convex analysis for vector spaces with an arbitrary (possibly infinite) number of dimensions over any ordered field (not just $\Q$ or $\R$).

:::::: card
::: card-header
**Definition: Unit Interval, $[0_F, 1_F]$, Open Unit Interval, $(0_F, 1_F)$**
:::
::: card-body
Let $F$ be an ordered field. The ___unit interval___ in $F$, denoted by $[0_F, 1_F]$, is the set

$$ [0_F, 1_F] \coloneqq \{ t \in F: 0_F \le t \le 1_F \} $$

where $0_F$ and $1_F$ denote the additive and multiplicative identity elements of $F$, respectively. Similarly, the ___open unit interval___ in $F$, denoted by $(0_F, 1_F)$, is the set

$$ (0_F, 1_F) \coloneqq \{ t \in F: 0_F < t < 1_F \}. $$
:::
::::::

Whenever we work in an unspecified ordered field $F$, we will refer to the additive and multiplicative identity elements of $F$ as $0_F$ and $1_F$, respectively, to remind ourselves that these may not be real numbers.

:::::: card
::: card-header
**Definition: Line Segment, $[\vv, \vw]$, $[\vv, t, \vw]$**
:::
::: card-body
Let $V$ be a vector space over an ordered field $F$. Given two vectors $\vv, \vw \in V$, the ___line segment___ connecting $\vv$ to $\vw$ is the set

$$ [\vv, \vw] \coloneqq \{ t \vv + (1_F - t) \vw : t \in [0_F, 1_F] \}. $$

We also define the notation

$$ [\vv, t, \vw] \coloneqq t \vv + (1_F - t) \vw $$

to refer to a particular point along this line segment.
:::
::::::

Although the notation $[\vv, t, \vw]$ is well-defined for all values of $t \in F$, we will only write $[\vv, t, \vw]$ when $0_F \le t \le 1_F$.

:::::: card
::: card-header
**Definition: Convex Set**
:::
::: card-body
Let $V$ be a vector space over an ordered field $F$. A subset $C \subseteq V$ is ___convex___ if, for all pairs of points $\vv, \vw \in C$, the line segment $[\vv, \vw]$ is contained in $C$.
:::
::::::

It immediately follows from this definition that:
 * Any singleton subset of $V$ is a convex set.
 * Any linear subspace of $V$, including $V$ itself, is a convex set.
 * The intersection of any number of convex subsets of $V$ is a convex set.

:::::: card
::: card-header
**Definition: Convex Function**
:::
::: card-body
Let $V$ be a vector space over an ordered field $F$, and let $C \subseteq V$ be convex. A function $f: C \to F$ is ___convex___ if, for all $\vv, \vw \in C$ and $t \in [0_F, 1_F]$, we have

$$ f([\vv, t, \vw]) \le [f(\vv), t, f(\vw)]. $$
:::
::::::

On the right-hand side of this inequality, we regard $F$ itself as a vector space over $F$ in order to write $[f(\vv), t, f(\vw)]$. Note that the domain of a convex function is required to be a convex set in order for $f([\vv, t, \vw])$ to be well-defined.

:::::: card
::: card-header
**Definition: Strictly Convex Function**
:::
::: card-body
Let $V$ be a vector space over an ordered field $F$, and let $C \subseteq V$ be convex. A function $f: C \to F$ is ___strictly convex___ if, for all $\vv, \vw \in C$ and $t \in (0_F, 1_F)$, we have

$$ f([\vv, t, \vw]) < [f(\vv), t, f(\vw)]. $$
:::
::::::

:::::: card
::: card-header
**Definition: $\mu$-Strongly Convex Function**
:::
::: card-body
Let $V$ be an inner product space over an ordered field $F$, let $C \subseteq V$ be convex, and let $\mu \in F$ be positive ($\mu > 0_F$). A function $f: C \to F$ is ___$\mu$-strongly convex___ if, for all $\vv, \vw \in C$ and $t \in [0_F, 1_F]$, we have

$$ f([\vv, t, \vw]) \le [f(\vv), t, f(\vw)] - \frac{\mu}{2_F} t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle. $$
:::
::::::

Note that division by $2_F$ is well-defined because an ordered field cannot have positive characteristic.

:::::: card
::: card-header
**Norm of Midpoint vs. Midpoint of Norms**
:::
::: card-body
**Theorem:** Let $V$ be a vector space over a field $F$, and let $\langle \cdot, \cdot \rangle: V \times V \to F$ be a bilinear form on $V$. (We do not assume $\langle \cdot, \cdot \rangle$ to be symmetric or positive-definite.) For any $\vv, \vw \in V$ and $t \in F$, we have

$$ [\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] - \langle [\vv, t, \vw], [\vv, t, \vw] \rangle = t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle. $$

If, in addition, $F$ is an ordered field, $\langle \cdot, \cdot \rangle$ is positive-semidefinite, and $0_F \le t \le 1_F$, then

$$[\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] \ge \langle [\vv, t, \vw], [\vv, t, \vw] \rangle. $$
:::
------
::: card-body
*Proof:* Let $\vv, \vw \in V$ and $t \in F$ be given. We proceed by direct computation:

$$ \begin{aligned}
    &[\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle]
    - \langle [\vv, t, \vw], [\vv, t, \vw] \rangle \\
    &= t \langle \vv, \vv \rangle + (1_F - t) \langle \vw, \vw \rangle - \langle t \vv + (1_F - t) \vw, t \vv + (1_F - t) \vw \rangle \\
    &= t \langle \vv, \vv \rangle + (1_F - t) \langle \vw, \vw \rangle - t^2 \langle \vv, \vv \rangle - t (1_F - t) \langle \vv, \vw \rangle - t (1_F - t) \langle \vw, \vv \rangle - (1_F - t)^2 \langle \vw, \vw \rangle \\
    &= t (1_F - t) \langle \vv, \vv \rangle + t (1_F - t) \langle \vw, \vw \rangle - t (1_F - t) \langle \vv, \vw \rangle - t (1_F - t) \langle \vw, \vv \rangle \\
    &= t (1_F - t) [\langle \vv, \vv \rangle - \langle \vv, \vw \rangle - \langle \vw, \vv \rangle + \langle \vw, \vw \rangle] \\
    &= t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle
\end{aligned} $$

This establishes the desired equation. Now observe that if $\langle \cdot, \cdot \rangle$ is positive-semidefinite and $0_F \le t \le 1_F$, then the right-hand side $t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle$ is a product of three nonnegative quantities. This establishes the desired inequality. &qed;
:::
::::::

As a direct corollary of this result, it follows that the squared-norm function $\vx \mapsto \langle \vx, \vx \rangle$ is $2_F$-strongly convex, or equivalently, that the scaled function $\vx \mapsto \frac{1_F}{2_F} \langle \vx, \vx \rangle$ is $1_F$-strongly convex. It turns out that the squared-norm function completely characterizes the notion of $\mu$-strong convexity, in the sense that the $\mu$-strong convexity of any function can be determined by comparison to $\vx \mapsto \frac{\mu}{2_F} \langle \vx, \vx \rangle$.

:::::: card
::: card-header
**Characterizing $\mu$-Strong Convexity**
:::
::: card-body
**Theorem:** Let $V$ be an inner product space over an ordered field $F$, let $C \subseteq V$ be convex, and let $\mu \in F$ be positive. A function $f: C \to F$ is $\mu$-strongly convex if and only if the function $g: C \to F$ defined by

$$ g(\vx) \coloneqq f(\vx) - \frac{\mu}{2_F} \langle \vx, \vx \rangle $$

is convex.
:::
------
::: card-body
*Proof:* By definition, $g$ is convex if and only if the following inequality holds:

$$ \begin{aligned}
g([\vv, t, \vw]) &\le [g(\vv), t, g(\vw)] \\
f([\vv, t, \vw]) - \frac{\mu}{2_F} \langle [\vv, t, \vw], [\vv, t, \vw] \rangle
&\le [f(\vv), t, f(\vw)] - \frac{\mu}{2_F} [\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle]
\end{aligned} $$

After rearranging this inequality, we can simplify it using our formula for $[\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] - \langle [\vv, t, \vw], [\vv, t, \vw] \rangle$:

$$ \begin{aligned}
f([\vv, t, \vw]) &\le [f(\vv), t, f(\vw)] - \frac{\mu}{2_F} \big( [\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] - \langle [\vv, t, \vw], [\vv, t, \vw] \rangle \big) \\
&= [f(\vv), t, f(\vw)] - \frac{\mu}{2_F} t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle
\end{aligned} $$

This is precisely the definition of $\mu$-strong convexity for $f$. &qed;
:::
::::::

:::::: card
::: card-header
**Definition: Subgradient, Subdifferential, $\partial f(\vv)$**
:::
::: card-body
Let $V$ be a vector space over an ordered field $F$, let $D \subseteq V$, and let $f: D \to F$. A ___subgradient___ of $f$ at a point $\vv \in D$ is a linear functional $g \in V^*$ having the property that

$$ f(\vw) - f(\vv) \ge g(\vw - \vv) $$

for all $\vw \in D$. The set of all subgradients of $f$ at a point $\vv \in D$, denoted by $\partial f(\vv)$, is called the ___subdifferential___ of $f$ at $\vv$.

$$ \partial f(\vv) \coloneqq \{ g \in V^* : \forall \vw \in D,\ f(\vw) - f(\vv) \ge g(\vw - \vv) \} $$
:::
::::::

:::::: card
::: card-header
**Definition: Transpose, $\vg^T$, Representable Linear Functional, Representable Dual Space, $V^T$**
:::
::: card-body
Let $V$ be an inner product space over an ordered field $F$, and let $\vg \in V$ be a vector. The ___transpose___ of $\vg$ is the linear functional $\vg^T: V \to F$ defined by

$$ \vg^T(\vx) \coloneqq \langle \vg, \vx \rangle. $$

A linear functional $g: V \to F$ is ___representable___ if there exists a vector $\vg \in V$ such that $g = \vg^T$. The set of all representable linear functionals on $V$, denoted by $V^T$, is called the ___representable dual space___ of $V$.

$$ V^T \coloneqq \{ \vg^T : \vg \in V \} = \{ g \in V^* : \exists \vg \in V,\ \forall \vx \in V,\ g(\vx) = \langle \vg, \vx \rangle \} $$
:::
::::::

The representable dual space $V^T$ is a linear subspace of the full dual space $V^*$, and they coincide if and only if $V$ is finite-dimensional.

:::::: card
::: card-header
**Subdifferentials are Convex Sets**
:::
::: card-body
**Theorem:** Let $V$ be a vector space over an ordered field $F$, let $D \subseteq V$, and let $f: D \to F$. For any $\vv \in D$, the subdifferential $\partial f(\vv)$ is a convex subset of the dual space $V^*$.
:::
------
::: card-body
*Proof:* Let $g_1, g_2 \in \partial f(\vv)$ be given. To show that $\partial f(\vv)$ is convex, we must prove that the line segment $[g_1, g_2]$ is contained in $\partial f(\vv)$. By hypothesis, for all $\vw \in D$, we have

$$ f(\vw) - f(\vv) \ge g_1(\vw - \vv) $$

and

$$ f(\vw) - f(\vv) \ge g_2(\vw - \vv). $$

Let $t \in [0_F, 1_F]$ be given. By multiplying the first equation by $t$ and the second equation by $1_F - t$, we obtain

$$ t f(\vw) - t f(\vv) \ge t g_1(\vw - \vv) $$

and

$$ (1_F - t) f(\vw) - (1_F - t) f(\vv) \ge (1_F - t) g_2(\vw - \vv). $$

By adding these two inequalities together, we obtain

$$ f(\vw) - f(\vv) \ge [t g_1 + (1_F - t) g_2](\vw - \vv) $$

which proves that $t g_1 + (1_F - t) g_2 = [g_1, t, g_2] \in \partial f(\vv)$. Since $t \in [0_F, 1_F]$ was arbitrary, this proves that the line segment $[g_1, g_2]$ is contained in $\partial f(\vv)$. &qed;
:::
::::::

:::::: card
::: card-header
**Subgradient of Squared Norm**
:::
::: card-body
**Theorem:** Let $V$ be an inner product space over an ordered field $F$, and consider the function $f: V \to F$ defined by $f(\vx) \coloneqq \frac{1_F}{2_F} \langle \vx, \vx \rangle$. At any point $\vx \in V$, the unique representable subgradient of $f$ at $\vx$ is $\vx^T$.

$$ \forall \vx \in V,\ \partial f(\vx) \cap V^T = \{ \vx^T \} $$
:::
------
::: card-body
*Proof:* Let $\vg, \vx \in V$ be given. By definition, $\vg^T$ is a subdifferential of $f$ at $\vx$ if and only if

$$ \frac{1_F}{2_F} \langle \vy, \vy \rangle - \frac{1_F}{2_F} \langle \vx, \vx \rangle \ge \langle \vg, \vy - \vx \rangle $$

for all $\vy \in V$. We can rearrange this inequality into the equivalent form

$$ \langle \vy - 2_F \vg, \vy \rangle - \langle \vx - 2_F \vg, \vx \rangle \ge 0_F. $$

Since this inequality must hold for all values of $\vy$, in particular, it must hold when $\vy = \vg$. Setting $\vy$ to $\vg$ simplifies the left-hand side of the inequality as follows:

$$ \begin{aligned}
\langle \vg - 2_F \vg, \vg \rangle - \langle \vx - 2_F \vg, \vx \rangle
&= -\langle \vg, \vg \rangle - \langle \vx, \vx \rangle + 2_F \langle \vg, \vx \rangle \\
&= -\langle \vg - \vx, \vg - \vx \rangle
\end{aligned} $$

It is impossible for the inequality $-\langle \vg - \vx, \vg - \vx \rangle \ge 0$ to hold whenever $\vg \ne \vx$. This proves that $\vg^T \notin \partial f(\vx)$ whenever $\vg \ne \vx$. To prove that converse, that $\vx^T \in \partial f(\vx)$, we must show that

$$ \frac{1_F}{2_F} \langle \vy, \vy \rangle - \frac{1_F}{2_F} \langle \vx, \vx \rangle \ge \langle \vx, \vy - \vx \rangle $$

for all $\vy \in V$. We can simplify this inequality into the following equivalent forms:

$$ \begin{aligned}
\frac{1_F}{2_F} \langle \vy, \vy \rangle - \frac{1_F}{2_F} \langle \vx, \vx \rangle &\ge \langle \vx, \vy \rangle - \langle \vx, \vx \rangle \\
\frac{1_F}{2_F} \langle \vy, \vy \rangle + \frac{1_F}{2_F} \langle \vx, \vx \rangle &\ge \langle \vx, \vy \rangle \\
\frac{1_F}{2_F} \langle \vy - \vx, \vy - \vx \rangle &\ge 0_F
\end{aligned} $$

It follows from the positive-definiteness of the inner product that this inequality holds for all $\vy \in V$. &qed;
:::
::::::

We now introduce a notion that is dual to $\mu$-strong convexity.

:::::: card
::: card-header
**Definition: $L$-Controlled Function**
:::
::: card-body
Let $V$ be an inner product space over an ordered field $F$, let $C \subseteq V$ be convex, and let $L \in F$ be positive ($L > 0_F$). A function $f: C \to F$ is ___$L$-controlled___ if, for all $\vv, \vw \in C$ and $t \in [0_F, 1_F]$, we have

$$ f([\vv, t, \vw]) \ge [f(\vv), t, f(\vw)] - \frac{L}{2_F} t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle. $$
:::
::::::

The property of being $L$-controlled becomes _more_ restrictive as the value of $L$ _decreases_. For example, being $1_F$-controlled is a _stronger_ condition than being $2_F$-controlled.

:::::: card
::: card-header
**Characterizing $L$-Control**
:::
::: card-body
**Theorem:** Let $V$ be an inner product space over an ordered field $F$, let $C \subseteq V$ be convex, and let $L \in F$ be positive. A function $f: C \to F$ is $L$-controlled if and only if the function $g: C \to F$ defined by

$$ g(\vx) \coloneqq \frac{L}{2_F} \langle \vx, \vx \rangle - f(\vx) $$

is convex.
:::
------
::: card-body
*Proof:* By definition, $g$ is convex if and only if the following inequality holds:

$$ \begin{aligned}
g([\vv, t, \vw]) &\le [g(\vv), t, g(\vw)] \\
\frac{L}{2_F} \langle [\vv, t, \vw], [\vv, t, \vw] \rangle - f([\vv, t, \vw])
&\le \frac{L}{2_F} [\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] - [f(\vv), t, f(\vw)]
\end{aligned} $$

After rearranging this inequality, we can simplify it using our formula for $[\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] - \langle [\vv, t, \vw], [\vv, t, \vw] \rangle$:

$$ \begin{aligned}
f([\vv, t, \vw])
&\ge [f(\vv), t, f(\vw)] - \frac{L}{2_F} \big( [\langle \vv, \vv \rangle, t, \langle \vw, \vw \rangle] - \langle [\vv, t, \vw], [\vv, t, \vw] \rangle \big) \\
&= [f(\vv), t, f(\vw)] - \frac{L}{2_F} t (1_F - t) \langle \vv - \vw, \vv - \vw \rangle
\end{aligned} $$

This is precisely the definition of $f$ being $L$-controlled. &qed;
:::
::::::

Let $V$ be an inner product space over an ordered field $F$. Let $L \in F$ be a positive constant, and let $f: V \to F$ be an $L$-controlled convex function. This means that both $f$ and the function $\gamma: V \to F$ defined by

$$ \gamma(\vx) \coloneqq \frac{L}{2_F} \langle \vx, \vx \rangle - f(\vx) $$

are convex. Let $\vx \in V$ be given, and suppose that both $f$ and $\gamma$ have representable subgradients $\vg^T \in \partial f(\vx)$ and $\vh^T \in \partial \gamma(\vx)$. It follows that $\vg^T + \vh^T$ is a representable subgradient of $(f + \gamma)(\vx) = \frac{L}{2_F} \langle \vx, \vx \rangle$, which implies that $\vg^T + \vh^T = L\vx^T$. By definition, for all $\vy \in V$, we have the inequality

$$ \left[ \frac{L}{2_F} \langle \vy, \vy \rangle - f(\vy) \right] - \left[ \frac{L}{2_F} \langle \vx, \vx \rangle - f(\vx) \right] \ge \vh^T(\vy - \vx) $$

which can be rearranged into the equivalent form

$$ f(\vy) - f(\vx) \le \frac{L}{2_F} \left[ \langle \vy, \vy \rangle - \langle \vx, \vx \rangle \right] - \vh^T(\vy - \vx). $$

Since $\vg^T + \vh^T = L\vx^T$, we can write

$$ \begin{aligned} f(\vy) - f(\vx)
&\le \frac{L}{2_F} \left[ \langle \vy, \vy \rangle - \langle \vx, \vx \rangle \right] - \vh^T(\vy - \vx) \\
&\le \frac{L}{2_F} \left[ \langle \vy, \vy \rangle - \langle \vx, \vx \rangle \right] - \vh^T(\vy - \vx) + \left( \vg^T + \vh^T \right) (\vy - \vx) - L\vx^T(\vy - \vx) \\
&= \frac{L}{2_F} \left[ \langle \vy, \vy \rangle - \langle \vx, \vx \rangle \right] + \vg^T (\vy - \vx) - L \langle \vx, \vy - \vx \rangle \\
&= \vg^T (\vy - \vx)  + \frac{L}{2_F} \langle \vy - \vx, \vy - \vx \rangle
\end{aligned} $$

which proves that

$$ f(\vy) \le f(\vx) + \vg^T (\vy - \vx)  + \frac{L}{2_F} \langle \vy - \vx, \vy - \vx \rangle $$

for all $\vy \in V$. In particular, for any $\alpha \in F$, we can set $\vy = \vx - \alpha \vg$ to obtain the inequality

$$ f(\vx - \alpha \vg) \le f(\vx) - \alpha \left( 1_F - \frac{L \alpha}{2_F} \right) \langle \vg, \vg \rangle. $$

This inequality shows that a gradient descent step is guaranteed to decrease any convex objective function $f$, as long as:

 * $f$ is $L$-controlled for some positive constant $L \in F$;
 * the step size $\alpha$ is strictly between $0_F$ and $2_F/L$;
 * both $f$ and $\gamma$ have representable subgradients at the current point $\vx$;
 * the subgradient $\vg^T \in \partial f(\vx)$ used to take the step is not zero.
