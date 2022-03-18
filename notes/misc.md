# Miscellaneous Thoughts {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

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
