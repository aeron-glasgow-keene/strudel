// An adjusted copy of Switch Angel's code - https://www.youtube.com/watch?v=iu5rnQkfO6M

// Current code saved at:
// https://strudel.cc/#c2V0Q3BtKDEzNi80KQpyZWdpc3RlcignYWNpZGVudicsICh4LCBwYXQpID0%2BIHBhdC5scGYoMTAwKQogICAgICAgIC5scGVudih4ICogOSkubHBzKC4yKS5scGQoLjEyKQogICAgICAgICkKLy8gTEVUIFVTIFRSQU5DRSBPTkNFIE1PUkUgCiQ6IG4oIjwwIDQgMCA5IDc%2BKjE2Iikuc2NhbGUoImc6bWlub3IiKS50cmFucygtMTIpCi5zKCJzYXd0b290aCIpLmFjaWRlbnYoc2xpZGVyKDAuMzYpKQouX3BpYW5vcm9sbCgpCiQ6IG4oIjwwPioxNiIpLnNjYWxlKCJnOm1pbm9yIikudHJhbnMoLTI0KQogIC5kZXR1bmUocmFuZCkKLnMoInN1cGVyc2F3IikuYWNpZGVudihzbGlkZXIoMC40MDUpKQouX3BpYW5vcm9sbCgpCiQ6IHMoInJvbGFuZHRyODA4X2hoOjEhMTYiKQoKJDogcygidHI5MDlfYmQ6MyE0IikKICAuZHVjaygiMzo0OjU6NiIpCiAgLmR1Y2tkZXB0aCgiLjgiKQogIC5fc2NvcGUoKQo%3D

setCpm(136/4)
register('acidenv', (x, pat) => pat.lpf(100)
        .lpenv(x * 9).lps(.2).lpd(.12)
        )
// LET US TRANCE ONCE MORE 
$: n("<0 4 0 9 7>*16").scale("g:minor").trans(-12)
.s("sawtooth").acidenv(slider(0.36))
._pianoroll()
$: n("<0>*16").scale("g:minor").trans(-24)
  .detune(rand)
.s("supersaw").acidenv(slider(0.405))
._pianoroll()
$: s("rolandtr808_hh:1!16")

$: s("tr909_bd:3!4")
  .duck("3:4:5:6")
  .duckdepth(".8")
  ._scope()
