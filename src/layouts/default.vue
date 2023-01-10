<template>
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-white ring-1 ring-zinc-100" />
    </div>
  </div>
  <Container>
    <Container>
      <Header>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
          Software Enginnier, Co-founder and Proptech creator
        </h1>
      </Header>
    </Container>
    <Container>
      <div class="">
        <RouterView />
      </div>
    </Container>
    <Container>
      <Footer />
    </Container>
  </Container>
</template>
