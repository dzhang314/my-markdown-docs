# Notes on Optimization {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>



# One-Dimensional Optimization

Fix $x_0 \in \R$ and let $f: [x_0, \infty) \to \R$ be a continuous function. We would like to devise an algorithm to find a minimizer $x^*$ of $f$ that is, in some sense, "near" $x_0$.

$$ \min_{x \ge x_0} f(x) $$

We will not assume any particular form for the function $f$, and we will develop algorithms that only access $f$ as a black box. In other words, given a real number $x \in [x_0, \infty)$, we can call a subroutine that returns the numerical value of $f(x)$. This output value is the only feature of the subroutine that we can observe; we cannot otherwise look inside to see what it is doing.

Under these conditions, any algorithm that terminates can only perform a finite number of evaluations of $f$. Hence, no algorithm of this type can provide any guarantees about finding a global minimizer or computing an exact result. Even in the one-dimensional case, the best we can hope to do is to approximate a local minimizer of $f$.

## Quadratic Bracketing

Suppose we have a ___three-point bracket___ for $f$, i.e., a pair of real numbers $x_1, x_2 \in \R$ such that

$$ x_0 < x_1 < x_2 \quad \text{and} \quad f(x_0) \ge f(x_1) \le f(x_2). $$

Using this data, we can construct a quadratic interpolating polynomial $p \in \R[x]$ that passes through the points $(x_0, f(x_0))$, $(x_1, f(x_1))$, and $(x_2, f(x_2))$.

$$ p(x) \coloneqq \frac{\Delta_2 - \Delta_1}{h_1 + h_2} (x - x_0)^2 + \frac{2 h_1 \Delta_1 + h_2 \Delta_1 - h_1 \Delta_2}{h_1 + h_2} (x - x_0) + f_0 $$

Here, we have defined $h_1$, $h_2$, $\Delta_1$, and $\Delta_2$ as follows:

$$ h_1 \coloneqq x_1 - x_0 > 0 \qquad h_2 \coloneqq x_2 - x_1 > 0 $$
$$ \Delta_1 \coloneqq \frac{f(x_1) - f(x_0)}{x_1 - x_0} \le 0 \qquad \Delta_2 \coloneqq \frac{f(x_2) - f(x_1)}{x_2 - x_1} \ge 0 $$

The following _Mathematica_ code verifies the correctness of this formula.

```
On[Assert];

p[x_] := (Δ₂ - Δ₁)/(h₁ + h₂)*(x - x₀)^2 +
    (2h₁*Δ₁ + h₂*Δ₁ - h₁*Δ₂)/(h₁ + h₂)*(x - x₀) + f₀;

Assert[p[x₀] == f₀ // Simplify];
Assert[p[x₀ + h₁] == f₀ + h₁*Δ₁ // Simplify];
Assert[p[x₀ + h₁ + h₂] == f₀ + h₁*Δ₁ + h₂*Δ₂ // Simplify];
```
