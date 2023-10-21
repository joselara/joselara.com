<template>
  <div class="fixed inset-0 flex justify-center sm:px-8">
    <div class="flex w-full max-w-7xl lg:px-8">
      <div class="w-full bg-white ring-1 ring-zinc-100" />
    </div>
  </div>
  <div class="relative">
    <Container>
      <Header>
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            Software Expertise, Startup Spirit: Crafting the Next Generation of Digital Solutions
          </h1>
        </Container>
      </Header>
    </Container>
    <RouterView />
    <Footer />
  </div>
</template>
