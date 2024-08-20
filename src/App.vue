<script setup lang="ts"></script>

<template>
  <main class="m-auto p-4 w-[900px]">
    <div class="flex gap-2">
      <div class="w-1/4 bg-white rounded-lg p-3">
        <form class="">
          <h3 class="text-lg font-semibold mb-1">Тип блока</h3>
          <select name="" id="" class="w-full pl-4 border-2 border-gray-400">
            <option value="">Заголовок</option>
            <option value="">Аватарка</option>
            <option value="">Подзаголовок</option>
            <option value="">Текст</option>
          </select>
          <textarea
            name=""
            id=""
            class="w-full mt-4 mb-2 h-28 border-2 border-gray-400 focus:outline-none focus:border-green-800"
          ></textarea>
          <button
            class="bg-green-700 py-2 px-3 shadow-xl border-1 rounded-2xl text-sm text-white font-bold hover:bg-green-600 active:bg-green-400"
          >
            ДОБАВИТЬ
          </button>
        </form>
      </div>

      <div class="w-3/4 bg-white rounded-lg p-3">
        <div v-if="false">
          <h2 class="text-2xl font-semibold">Добавьте первый блок, что бы увидеть результат</h2>
        </div>
        <div v-else>
          <h2 class="text-2xl font-semibold mb-3">Резюме Илья</h2>
          <div class="flex justify-center">
            <img
              class="w-32 rounded-full"
              src="https://coolsen.ru/wp-content/uploads/2021/06/6-8.jpg"
              alt="ava"
            />
          </div>

          <div class="my-4">
            <div class="my-2">
              <h3 class="text-xl font-medium mb-1">О себе</h3>
              <hr />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit molestiae quasi
                modi rerum repellendus sapiente corporis dolore fugiat? Sit, voluptatibus. Eveniet
                at, numquam pariatur odio debitis explicabo optio maxime corrupti natus illo! Unde
                numquam esse ad, accusamus, placeat culpa, incidunt aspernatur itaque suscipit quis
                debitis dolor nostrum cum exercitationem. Excepturi dolor libero nostrum, quis
                asperiores dolore perferendis vitae rerum nesciunt expedita magnam deleniti
                doloremque. Quasi obcaecati enim aliquam autem, eius quod, incidunt optio placeat
                perferendis asperiores delectus commodi amet consequuntur fuga doloremque laborum
                quo dicta praesentium facilis beatae, inventore fugiat voluptates est nesciunt?
                Voluptatum deleniti fuga exercitationem minus iusto!
              </p>
            </div>
          </div>

          <div>
            <div class="my-2">
              <h3 class="text-xl font-medium mb-1">О себе</h3>
              <hr />
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit molestiae quasi
                modi rerum repellendus sapiente corporis dolore fugiat? Sit, voluptatibus. Eveniet
                at, numquam pariatur odio debitis explicabo optio maxime corrupti natus illo! Unde
                numquam esse ad, accusamus, placeat culpa, incidunt aspernatur itaque suscipit quis
                debitis dolor nostrum cum exercitationem. Excepturi dolor libero nostrum, quis
                asperiores dolore perferendis vitae rerum nesciunt expedita magnam deleniti
                doloremque. Quasi obcaecati enim aliquam autem, eius quod, incidunt optio placeat
                perferendis asperiores delectus commodi amet consequuntur fuga doloremque laborum
                quo dicta praesentium facilis beatae, inventore fugiat voluptates est nesciunt?
                Voluptatum deleniti fuga exercitationem minus iusto!
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="mt-4 mb-4">
      <div v-if="false">
        <button
          class="bg-green-700 py-2 px-3 shadow-xl border-1 rounded-2xl text-sm text-white font-bold hover:bg-green-600 active:bg-green-400"
        >
          ЗАГРУЗИТЬ КОММЕНТАРИИ
        </button>
      </div>
      <div v-else class="w-full bg-white rounded-lg p-3">
        <h2 class="text-xl font-medium mb-1">Комментарии</h2>
        <hr>
        
        <div class="mt-6">
          <ul>
            <li class="mb-4">
              <p class="font-semibold mb-2">iii@gamail.com</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sunt quis dolores minima, vel nesciunt similique explicabo dolor? Odit, nobis?</p>
            </li>

            <li class="mb-4">
              <p class="font-semibold mb-2">iii@gamail.com</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sunt quis dolores minima, vel nesciunt similique explicabo dolor? Odit, nobis?</p>
            </li>

            <li class="mb-4">
              <p class="font-semibold mb-2">iii@gamail.com</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sunt quis dolores minima, vel nesciunt similique explicabo dolor? Odit, nobis?</p>
            </li>

            <li class="mb-4">
              <p class="font-semibold mb-2">iii@gamail.com</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sunt quis dolores minima, vel nesciunt similique explicabo dolor? Odit, nobis?</p>
            </li>

            <li class="mb-4">
              <p class="font-semibold mb-2">iii@gamail.com</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sunt quis dolores minima, vel nesciunt similique explicabo dolor? Odit, nobis?</p>
            </li>

            <li class="mb-4">
              <p class="font-semibold mb-2">iii@gamail.com</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sunt quis dolores minima, vel nesciunt similique explicabo dolor? Odit, nobis?</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
