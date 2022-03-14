# Miscellaneous Thoughts {.page-title}

<div class="text-center">
    David K. Zhang<br>
    Last Modified &today;
</div><br>

$$ y'(t) + p(t) y(t) = q(t) $$

$$ I(t) y'(t) + I(t) p(t) y(t) = I(t) q(t) $$

$$ \frac{\mathrm{d}}{\mathrm{d} {t}} \left[ I(t) y(t) \right] = I(t) y'(t) + I'(t) y(t) $$

$$ I'(t) = I(t) p(t) $$

$$ I(t) = \exp\!\left( \int p(t) \, \mathrm{d} t \right) $$

$$ y(t) = \frac{1}{I(t)} \int I(t) q(t) \, \mathrm{d} t $$
