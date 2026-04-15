## Exercise 22:

The exercise was done in the patientor app
https://github.com/HannsHau/helsinki---full-stack-open/tree/main/part9/patientor

commit with the changes:
https://github.com/HannsHau/helsinki---full-stack-open/commit/20d763b226cad21d503ed459879634a2f0dac387

## Exercise 23:

Again the patientor app
https://github.com/HannsHau/helsinki---full-stack-open/tree/main/part9/patientor

commit with the changes:
https://github.com/HannsHau/helsinki---full-stack-open/commit/f81bdf2406e247062260f458b05604a06b1dda35

Issues:
- Hard coded URL so that the passed VITE_BACKEND_URL from Dockerfile was ignored
- nginx config, here the /api/patient the api was part of the adress, so leave out the "/"