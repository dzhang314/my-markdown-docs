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
