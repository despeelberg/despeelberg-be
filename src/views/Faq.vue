<template>
  <div id="faq">
    <page>
      <template :slot="'header'">Veelgestelde vragen</template>
      <block :class="'no-flex'" :blockTitle="'Attesten'">
        <collapsible-card>
          <template :slot="'title'"
            >Lorem ipsum dolor sit amet consectetur adipisicing.</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quam omnis labore quis. Esse inventore voluptatem eius dolore possimus
          quaerat voluptate, minus alias ad, distinctio ab in facilis impedit
          maiores illo tenetur non tempore obcaecati optio tempora, nihil
          libero. Autem inventore doloribus aliquam dolor sed distinctio minus
          enim repudiandae, numquam, cupiditate eos repellat atque maxime beatae
          libero ut recusandae, odit quis rerum eligendi perspiciatis nemo
          voluptatibus ducimus non. Quod assumenda ipsam voluptas tempora.
          Doloremque sint asperiores eos necessitatibus nisi.
        </collapsible-card>
        <collapsible-card>
          <template :slot="'title'"
            >Lorem ipsum dolor sit amet consectetur adipisicing.</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quam omnis labore quis. Esse inventore voluptatem eius dolore possimus
          quaerat voluptate, minus alias ad, distinctio ab in facilis impedit
          maiores illo tenetur non tempore obcaecati optio tempora, nihil
          libero. Autem inventore doloribus aliquam dolor sed distinctio minus
          enim repudiandae, numquam, cupiditate eos repellat atque maxime beatae
          libero ut recusandae, odit quis rerum eligendi perspiciatis nemo
          voluptatibus ducimus non. Quod assumenda ipsam voluptas tempora.
          Doloremque sint asperiores eos necessitatibus nisi.
        </collapsible-card>
        <collapsible-card>
          <template :slot="'title'"
            >Lorem ipsum dolor sit amet consectetur adipisicing.</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quam omnis labore quis. Esse inventore voluptatem eius dolore possimus
          quaerat voluptate, minus alias ad, distinctio ab in facilis impedit
          maiores illo tenetur non tempore obcaecati optio tempora, nihil
          libero. Autem inventore doloribus aliquam dolor sed distinctio minus
          enim repudiandae, numquam, cupiditate eos repellat atque maxime beatae
          libero ut recusandae, odit quis rerum eligendi perspiciatis nemo
          voluptatibus ducimus non. Quod assumenda ipsam voluptas tempora.
          Doloremque sint asperiores eos necessitatibus nisi.
        </collapsible-card>
        <collapsible-card>
          <template :slot="'title'"
            >Lorem ipsum dolor sit amet consectetur adipisicing.</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quam omnis labore quis. Esse inventore voluptatem eius dolore possimus
          quaerat voluptate, minus alias ad, distinctio ab in facilis impedit
          maiores illo tenetur non tempore obcaecati optio tempora, nihil
          libero. Autem inventore doloribus aliquam dolor sed distinctio minus
          enim repudiandae, numquam, cupiditate eos repellat atque maxime beatae
          libero ut recusandae, odit quis rerum eligendi perspiciatis nemo
          voluptatibus ducimus non. Quod assumenda ipsam voluptas tempora.
          Doloremque sint asperiores eos necessitatibus nisi.
        </collapsible-card>
      </block>

      <block :class="'no-flex'" :blockTitle="'Andere categorie'">
        <collapsible-card>
          <template :slot="'title'"
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum esse alias aperiam maxime, quisquam vero?</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum enim repellat, consequuntur officiis nobis iure. Ea obcaecati voluptatibus, dolores sint, cum corrupti, vel aspernatur illo cupiditate voluptates non. Assumenda, placeat. Assumenda, quos. Possimus provident accusamus ipsam saepe sint non, asperiores temporibus? Odit similique asperiores, facere itaque hic tempora, neque tempore voluptatem dignissimos commodi maxime, numquam atque! Reiciendis fugit veniam ipsam aliquam, doloribus, non laudantium nihil assumenda modi ratione expedita libero eum eius exercitationem necessitatibus, voluptatibus soluta praesentium dolor! Obcaecati qui illo saepe repellat quidem. Laudantium corporis ducimus optio iste totam numquam quisquam voluptatum. Doloribus, quia consectetur assumenda, saepe a, nobis rerum fugiat quae facilis laudantium maxime. Fuga exercitationem blanditiis corrupti quo, recusandae est voluptate eos eligendi magnam tenetur sit. </collapsible-card
        ><collapsible-card>
          <template :slot="'title'"
            >Lorem ipsum dolor sit amet consectetur adipisicing.</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quam omnis labore quis. Esse inventore voluptatem eius dolore possimus
          quaerat voluptate, minus alias ad, distinctio ab in facilis impedit
          maiores illo tenetur non tempore obcaecati optio tempora, nihil
          libero. Autem inventore doloribus aliquam dolor sed distinctio minus
          enim repudiandae, numquam, cupiditate eos repellat atque maxime beatae
          libero ut recusandae, odit quis rerum eligendi perspiciatis nemo
          voluptatibus ducimus non. Quod assumenda ipsam voluptas tempora.
          Doloremque sint asperiores eos necessitatibus nisi. </collapsible-card
        ><collapsible-card>
          <template :slot="'title'"
            >Lorem ipsum dolor sit amet consectetur adipisicing.</template
          >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo optio
          quam omnis labore quis. Esse inventore voluptatem eius dolore possimus
          quaerat voluptate, minus alias ad, distinctio ab in facilis impedit
          maiores illo tenetur non tempore obcaecati optio tempora, nihil
          libero. Autem inventore doloribus aliquam dolor sed distinctio minus
          enim repudiandae, numquam, cupiditate eos repellat atque maxime beatae
          libero ut recusandae, odit quis rerum eligendi perspiciatis nemo
          voluptatibus ducimus non. Quod assumenda ipsam voluptas tempora.
          Doloremque sint asperiores eos necessitatibus nisi.
        </collapsible-card>
      </block>
    </page>
  </div>
</template>

<script>
import Block from "../components/Block.vue";
import CollapsibleCard from "../components/CollapsibleCard.vue";
import Page from "../components/Page.vue";

export default {
  name: "Faq",
  components: {
    Page,
    CollapsibleCard,
    Block,
  },
};
</script>

<style>
</style>