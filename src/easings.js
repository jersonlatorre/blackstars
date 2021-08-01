// acelerar
function easeIn(t) {
  return pow(t, 3)
}

// descacelerar
function easeOut(t) {
  return 1 - pow(1 - t, 3)
}

// acelerar/desacelerar
function easeInOut(t) {
  return t < 0.5 ? 4 * pow(t, 3) : 1 - pow(-2 * t + 2, 3) / 2
}

// anticipación del movimiento
function easeInBack(t) {
  return 2.70158 * pow(t, 3) - 1.70158 * pow(t, 2)
}

// continúa el movimiento
function easeOutBack(t) {
  return 1 + 2.70158 * pow(t - 1, 3) + 1.70158 * pow(t - 1, 2)
}

// anticipa y continúa el movimientoc="
function easeInOutBack(t) {
  const c = 2.5949095
  return t < 0.5
    ? pow(2 * t, 2) * ((c + 1) * 2 * t - c) / 2
    : (pow(2 * t - 2, 2) * ((c + 1) * (t * 2 - 2) + c) + 2) / 2
}

// retorna al valor inicial
function parabolic(t) {
  return 4 * t - 4 * t * t
}

// sube y baja con suavizado
function easeJump(t) {
  let p = 0.5 * sin(2 * PI * t - PI * 0.5) + 0.5
  return pow(p, 2)
}

// efecto resorte
function elastic(t) {
  if (t == 0) return 0
  if (t == 1) return 1
  return pow(2, -10 * t) * sin((10 * t - 0.75) * 0.666666 * PI) + 1
}

// efecto salto
function bounce(t) {
  const n1 = 7.5625
  const d1 = 2.75

  if (t < 1 / d1) {
    return n1 * t * t
  } else if (t < 2 / d1) {
    return n1 * (t -= 1.5 / d1) * t + 0.75
  } else if (t < 2.5 / d1) {
    return n1 * (t -= 2.25 / d1) * t + 0.9375
  } else {
    return n1 * (t -= 2.625 / d1) * t + 0.984375
  }
}
