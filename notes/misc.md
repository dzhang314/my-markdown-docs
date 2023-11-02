# Miscellaneous Thoughts {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

--------------------------------------------------------------------------------

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
 * Any linear subspace of $V$, including $V$ itself, is a convex set.
 * Any singleton subset of $V$ is a convex set.
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

--------------------------------------------------------------------------------

If a first-order ODE can be written in the form

$$ y'(t) = \frac{p(t)}{q(y(t))} $$

for some functions $p$ and $q$, then it is ___separable___. Such an ODE admits a one-parameter family of solutions

$$ y(t) = Q^{-1}(P(t) + C) $$

where $P$ is an antiderivative of $p$, $Q$ is an antiderivative of $q$, and $C$ is an arbitrary constant.

--------------------------------------------------------------------------------

If a first-order ODE can be written in the form

$$ y'(t) = a(t) y(t) + b(t) $$

for some functions $a$ and $b$, then it is ___linear___. Such an ODE admits a one-parameter family of solutions

$$ y(t) = e^{A(t)} [ Q(t) + C ]$$

where $A$ is an antiderivative of $a$, $Q(t)$ is an antiderivative of $e^{-A(t)} b(t)$ with respect to $t$, and $C$ is an arbitrary constant. If $b$ is the zero function, then we say that the equation is ___homogeneous___, and its corresponding family of solutions simplifies to

$$ y(t) = C e^{A(t)}. $$

--------------------------------------------------------------------------------

If a first-order ODE can be written in the form

$$ y'(t) = -\frac{p(t, y(t))}{q(t, y(t))} $$

where $p$ and $q$ are functions satisfying ${\partial p} / {\partial y} = {\partial q} / {\partial t}$, then it is ___exact___. Such an ODE admits a one-parameter family of solutions obtained by solving the equation

$$ U(t, y(t)) = C $$

for $y(t)$, where $C$ is an arbitrary constant and $U = U(t, y)$ is a function that satisfies $p = \partial U \! / \partial t$ and $q = \partial U \! / \partial y$.

--------------------------------------------------------------------------------

The method of ___variation of parameters___ is used to construct a particular solution to an inhomogeneous linear ODE

$$ y^{(n)}(t) = a_{n-1}(t) y^{(n-1)}(t) + \dots + a_{1}(t) y'(t) + a_{0}(t) y(t) + f(t) $$

when we already know a fundamental set of complementary solutions $y_1, \dots, y_n$ to the corresponding homogeneous ODE

$$ y^{(n)}(t) = a_{n-1}(t) y^{(n-1)}(t) + \dots + a_{1}(t) y'(t) + a_{0}(t) y(t).$$

In particular, variation of parameters tells us that

$$ y(t) = u_1(t) y_1(t) + \dots + u_n(t) y_n(t) $$

is a solution to the inhomogeneous ODE, where the functions $u_1, \dots, u_n$ are the antiderivatives of the functions $u_1', \dots, u_n'$ determined by the following linear system:

$$ \begin{bmatrix}
   y_1(t) & y_2(t) & \cdots & y_n(t) \\
   y_1'(t) & y_2'(t) & \cdots & y_n'(t) \\
   \vdots & \vdots & \ddots & \vdots \\
   y_1^{(n-1)}(t) & y_2^{(n-1)}(t) & \cdots & y_n^{(n-1)}(t)
\end{bmatrix} \begin{bmatrix} u_1'(t) \\ u_2'(t) \\ \vdots \\ u_n'(t) \end{bmatrix}
= \begin{bmatrix} 0 \\ \vdots \\ 0 \\ f(t) \end{bmatrix} $$

--------------------------------------------------------------------------------

:::::: card
::: card-header
**Definition: Relation, Binary Relation, $a \mathrel{R} b$**
:::
::: card-body
Let $A$ and $B$ be sets. A ___relation___ between $A$ and $B$, also known as a ___binary relation___, is a subset of the Cartesian product $A \times B$. Given a relation $R \subseteq A \times B$ and two elements $a \in A$ and $b \in B$, we write $a \mathrel{R} b$ to denote that $(a, b) \in R$.
:::
::::::

:::::: card
::: card-header
**Definition: Reflexive, Symmetric, Antisymmetric, Transitive**
:::
::: card-body
Let $A$ be a set.
 * A binary relation $R \subseteq A \times A$ is ___reflexive___ if $a \mathrel{R} a$ for all $a \in A$.
 * A binary relation $R \subseteq A \times A$ is ___symmetric___ if $a \mathrel{R} b$ implies $b \mathrel{R} a$ for all $a, b \in A$.
 * A binary relation $R \subseteq A \times A$ is ___antisymmetric___ if $a \mathrel{R} b$ and $b \mathrel{R} a$ implies $a = b$ for all $a, b \in A$.
 * A binary relation $R \subseteq A \times A$ is ___transitive___ if $a \mathrel{R} b$ and $b \mathrel{R} c$ implies $a \mathrel{R} c$ for all $a, b, c \in A$.
:::
::::::

:::::: card
::: card-header
**Definition: Equivalence Relation**
:::
::: card-body
An ___equivalence relation___ on a set $A$ is a binary relation $R \subseteq A \times A$ that is reflexive, symmetric, and transitive.
:::
::::::

:::::: card
::: card-header
**Definition: Converse, Inverse**
:::
::: card-body
Let $A$ and $B$ be sets. The ___converse___ or ___inverse___ of a relation $R \subseteq A \times B$ is the relation $R^{-1} \subseteq B \times A$ defined by
$$ R^{-1} \coloneqq \{ (b, a) \in B \times A : (a, b) \in R \}. $$
:::
::::::

In other words, $b \mathrel{R^{-1}} a$ if and only if $a \mathrel{R} b$.

:::::: card
::: card-header
**Definition: Function, Map, Domain, Codomain, $f: A \to B$, $f(a)$, Maps**
:::
::: card-body
Let $A$ and $B$ be sets. A ___function___ from $A$ to $B$, also known as a ___map___, is a relation $f \subseteq A \times B$ that has the following property: for every $a \in A$, there exists a unique $b \in B$ such that $a \mathrel{f} b$. We call the set $A$ the ___domain___ of $f$, we call the set $B$ the ___codomain___ of $f$, and we write $f: A \to B$ to denote that $f$ is a function from $A$ to $B$. Given $a \in A$, we write $f(a)$ to denote the unique element of $B$ that $a$ is related to, and we say that $f$ ___maps___ $a$ to $f(a)$.
:::
::::::

:::::: card
::: card-header
**Definition: Injective, Injection, $f: A \injto B$**
:::
::: card-body
Let $A$ and $B$ be sets. A function $f: A \to B$ is ___injective___ if $a_1 \ne a_2$ implies $f(a_1) \ne f(a_2)$ for all $a_1, a_2 \in A$. We call an injective function an ___injection___, and we write $f: A \injto B$ to denote that $f$ is an injective function from $A$ to $B$.
:::
::::::

In other words, a function is injective if it maps distinct elements of its domain to distinct elements of its codomain.

:::::: card
::: card-header
**Definition: Surjective, Surjection, $f: A \surjto B$**
:::
::: card-body
Let $A$ and $B$ be sets. A function $f: A \to B$ is ___surjective___ if, for every $b \in B$, there exists $a \in A$ such that $f(a) = b$. We call a surjective function a ___surjection___, and we write $f: A \surjto B$ to denote that $f$ is a surjective function from $A$ to $B$.
:::
::::::

:::::: card
::: card-header
**Definition: Bijective, Bijection, $f: A \bijto B$**
:::
::: card-body
Let $A$ and $B$ be sets. A function $f: A \to B$ is ___bijective___ if it is both injective and surjective. We call a bijective function a ___bijection___, and we write $f: A \bijto B$ to denote that $f$ is a bijective function from $A$ to $B$.
:::
::::::

:::::: card
::: card-header
**Only Bijections have Inverses**
:::
::: card-body
**Theorem:** Let $A$ and $B$ be sets, and let $f: A \to B$ be a function. The converse relation $f^{-1}$ is a function if and only if $f$ is a bijection.
:::
------
::: card-body
*Proof:* Suppose $f^{-1}$ is a function. This means that, for every $b \in B$, there exists a unique $a \in A$ such that $b \mathrel{f^{-1}} a$, or equivalently, $a \mathrel{f} b$. The existence of $a$ implies that $f$ is surjective, and the uniqueness of $a$ implies that $f$ is injective.

Conversely, suppose $f$ is a bijection. For every $b \in B$, the surjectivity of $f$ implies that there exists an $a \in A$ such that $a \mathrel{f} b$, and the injectivity of $f$ implies that this $a$ is unique. Hence, $f^{-1}$ is a function. &qed;
:::
::::::

:::::: card
::: card-header
**Definition: Composition, $g \circ f$**
:::
::: card-body
Let $A$, $B$, and $C$ be sets. The ___composition___ of two functions $f: A \to B$ and $g: B \to C$ is the function $g \circ f: A \to C$ defined by

$$ (g \circ f)(a) \coloneqq g(f(a)) \text{ for all } a \in A. $$
:::
::::::

:::::: card
::: card-header
**Composition Preserves Injectivity and Surjectivity**
:::
::: card-body
**Theorem:** Let $A$, $B$, and $C$ be sets. Let $f: A \to B$ and $g: B \to C$.

 * If $f$ and $g$ are both injective, then $g \circ f$ is injective.
 * If $f$ and $g$ are both surjective, then $g \circ f$ is surjective.
:::
------
::: card-body
*Proof:*

 * Let $a_1, a_2 \in A$ be given. If $a_1 \ne a_2$, then by the injectivity of $f$, we have $f(a_1) \ne f(a_2)$. It follows by the injectivity of $g$ that $g(f(a_1)) \ne g(f(a_2))$, or equivalently, $(g \circ f)(a_1) \ne (g \circ f)(a_2)$.
 * Let $c \in C$ be given. By the surjectivity of $g$, there exists $b \in B$ such that $g(b) = c$. Now, by the surjectivity of $f$, there exists $a \in A$ such that $f(a) = b$. Hence, we have $(g \circ f)(a) = g(f(a)) = g(b) = c$. &qed;
:::
::::::

--------------------------------------------------------------------------------

:::::: card
::: card-header
**Definition: Hausdorff Space**
:::
::: card-body
A ___Hausdorff space___ is a topological space $(X, T)$ that has the following property: for all $x, y \in X$, if $x \ne y$, then there exist $U, V \in T$ such that $x \in U$, $y \in V$, and $U \cap V = \varnothing$.
:::
::::::

:::::: card
::: card-header
**Definition: Basis**
:::
::: card-body
Let $(X, T)$ be a topological space. A ___basis___ of $(X, T)$ is a collection of open sets $B \subseteq T$ that has the following property: for every open set $U \in T$, there exists a sub-collection $C \subseteq B$ such that $U = \bigcup C$.
:::
::::::

In other words, a basis is a collection of open sets that allows every open set to be written as a union of basis elements.

:::::: card
::: card-header
**Definition: Second-Countable**
:::
::: card-body
A topological space is ___second-countable___ if it admits a countable basis.
:::
::::::

:::::: card
::: card-header
**Definition: Manifold, Dimension**
:::
::: card-body
A ___manifold___ of ___dimension___ $n \in \N$, also called an ___$\boldsymbol{n}$-manifold___, is a second-countable locally Euclidean Hausdorff space.
:::
::::::

If manifolds were not required to be Hausdorff, then the line with two origins would be a one-dimensional manifold. Similarly, if manifolds were not required to be second-countable, then the long line would be a one-dimensional manifold.

--------------------------------------------------------------------------------

:::::: card
::: card-header
**Definition: Factorial**
:::
::: card-body
Let $n \in \N$. The ___factorial___ of $n$, denoted by $n!$, is the product of the numbers $\{1, 2, \dots, n\}$. In other words,

$$ n! \coloneqq 1 \times 2 \times \dots \times n. $$

We define $0! \coloneqq 1$ in accordance with the convention that the product of the empty set $\varnothing$ is the multiplicative identity $1$.
:::
::::::

:::::: card
::: card-header
**Definition: Gauss's Pi Function**
:::
::: card-body
___Gauss's pi function___ is the function $\Pi: \{ z \in \C : \Re(z) > -1 \} \to \C$ defined on the half-plane $\Re(z) > -1$ by the absolutely convergent improper integral

$$ \Pi(z) \coloneqq \int_0^\infty t^z e^{-t} \,\mathrm{d}t. $$
:::
::::::

Note that $\Pi(z)$ is holomorphic on the half-plane $\Re(z) > -1$ because the integral representation of its derivative, i.e.,

$$ \Pi'(z) = \int_0^\infty t^z e^{-t} \log t \,\mathrm{d}t, $$

converges absolutely.

$$ \Pi(0) = \int_0^\infty e^{-t} \,\mathrm{d}t = -(e^{-\infty} - e^0) = 1 $$

For $\Re(z) > -1$, integration by parts gives

$$ \Pi(z + 1) = \int_0^\infty t^{z + 1} e^{-t} \,\mathrm{d}t = (z + 1) \int_0^\infty t^z e^{-t} \,\mathrm{d}t = (z + 1) \Pi(z) $$

By putting these results together, we conclude that Gauss's pi function interpolates the factorial function.

:::::: card
::: card-header
**Bohr--Mollerup Theorem**
:::
::: card-body
**Theorem:** The gamma function is the unique function $f: (0, \infty) \to (0, \infty)$ that has the following properties:

 * $f(1) = 1$.
 * $f(x + 1) = xf(x)$ for all $x > 0$.
 * $\log f$ is convex.
:::
::::::

--------------------------------------------------------------------------------

$$
\begin{CD}
A @>>> B
\end{CD}
$$

--------------------------------------------------------------------------------

${n \choose k}$ is the number of $k$-element subsets of $[n]$.

${n \brack k}$ is the number of permutations of $[n]$ that have $k$ disjoint cycles.

${n \brace k}$ is the number of partitions of $[n]$ into $k$ non-empty subsets.

$$ {n \choose k} \coloneqq \frac{n!}{k!(n-k)!} $$

$$ {n \brace k} \coloneqq \frac{1}{k!} \sum_{i=0}^k (-1)^i {k \choose i} (k-i)^n $$

$k! {n \brace k}$ is the number of surjective functions $[n] \to [k]$.

$x^{\underline{n}}$

$x^{\overline{n}}$
