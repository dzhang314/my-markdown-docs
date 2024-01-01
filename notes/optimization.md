# Notes on Optimization

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



## One-Dimensional Optimization

In this section, we consider the problem of minimizing a continuous function $f: \R \to \R$. More specifically, we want to devise an algorithm to search for a minimizer $x^*$ of $f$ starting from one or more specified initial points. Different types of initial data (three-point brackets, two-point brackets, etc.) will lead to different classes of algorithms.

We will not assume any particular form for the function $f$, and we will develop algorithms that only access $f$ as a black box. In other words, given a real number $x \in \R$, we can call a subroutine that returns the numerical value of $f(x)$. This output value is the only feature of the subroutine that we can observe; we cannot otherwise look inside to see what it is doing.

Under these conditions, any algorithm that terminates can only perform a finite number of evaluations of $f$. Hence, no algorithm of this type can provide any guarantees about finding a global minimizer or computing an exact result. Even in the one-dimensional case, the best we can hope to do is to approximate a local minimizer of $f$.



### Bracketing and Interpolation

Suppose we have a ___three-point bracket___ for $f$, i.e., an ordered triple of real numbers $x_0, x_1, x_2 \in \R$ such that

$$ x_0 < x_1 < x_2 \quad \text{and} \quad f(x_0) \ge f(x_1) \le f(x_2). $$

Using this data, we can construct a quadratic interpolating polynomial $p \in \R[x]$ that passes through the points $(x_0, f(x_0))$, $(x_1, f(x_1))$, and $(x_2, f(x_2))$.

$$ p(x) \coloneqq \frac{\Delta_2 - \Delta_1}{h_1 + h_2} (x - x_0)^2 - \frac{h_1 \Delta_2 - h_2 \Delta_1 - 2 h_1 \Delta_1}{h_1 + h_2} (x - x_0) + f_0 $$

Here, we have defined $h_1$, $h_2$, $\Delta_1$, and $\Delta_2$ as follows:

$$ h_1 \coloneqq x_1 - x_0 > 0 \qquad h_2 \coloneqq x_2 - x_1 > 0 $$
$$ \Delta_1 \coloneqq \frac{f(x_1) - f(x_0)}{x_1 - x_0} \le 0 \qquad \Delta_2 \coloneqq \frac{f(x_2) - f(x_1)}{x_2 - x_1} \ge 0 $$

Now, if $f$ is well-approximated by $p$ in the interval $[x_0, x_2]$, then we might expect a minimizer of $p$ to closely approximate a minimizer of $f$. There is a simple formula for the exact (global) minimizer of $p$:

$$ x_{\text{quadratic}}^* = x_0 + \frac{h_1 \Delta_2 - h_2 \Delta_1 - 2 h_1 \Delta_1}{2(\Delta_2 - \Delta_1)} $$

Observe that $x_{\text{quadratic}}^*$ is well-defined as long as $\Delta_1$ and $\Delta_2$ are not both zero. Indeed, if $\Delta_1 = \Delta_2 = 0$, then this technique breaks down because $p$ is a constant polynomial. Moreover, if the bracket conditions $x_0 < x_1 < x_2$ and $f(x_0) \ge f(x_1) \le f(x_2)$ are satisfied, then $x_{\text{quadratic}}^*$ is guaranteed to lie in the interval $[x_0, x_2]$, and $p''(x_{\text{quadratic}}^*) \le 0$.

$(x_0, x_{\text{quadratic}}^*, x_1)$

$(x_1, x_{\text{quadratic}}^*, x_2)$

$(x_0, x_1, x_{\text{quadratic}}^*)$

$(x_{\text{quadratic}}^*, x_1, x_2)$

The following _Mathematica_ code verifies the correctness of these claims.

```
On[Assert];

p[x_] := (Δ₂ - Δ₁)/(h₁ + h₂)*(x - x₀)^2 -
    (h₁*Δ₂ - h₂*Δ₁ - 2h₁*Δ₁)/(h₁ + h₂)*(x - x₀) + f₀;

xQuadratic = x₀ + (h₁*Δ₂ - h₂*Δ₁ - 2h₁*Δ₁)/(2Δ₂ - 2Δ₁);

Assert[p[x₀] == f₀ // Simplify];
Assert[p[x₀ + h₁] == f₀ + h₁*Δ₁ // Simplify];
Assert[p[x₀ + h₁ + h₂] == f₀ + h₁*Δ₁ + h₂*Δ₂ // Simplify];
Assert[p'[xQuadratic] == 0 // Simplify];

Assuming[h₁ > 0 && h₂ > 0 && Δ₁ <= 0 && Δ₂ >= 0,
    Assert[p''[xQuadratic] >= 0 // Simplify];
    Assert[x₀ <= xQuadratic // Simplify];
    Assert[xQuadratic <= x₀ + h₁ + h₂ // Simplify];
];
```
