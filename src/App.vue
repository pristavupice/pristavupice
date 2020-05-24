<template>
  <div
    id="app"
    class="app">

    <app-header>
      
    </app-header>

    <main>
      <tabs>

          <tab name="description" selected="true">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum error autem dignissimos nobis illum temporibus 
              voluptate laboriosam eius consequatur! Labore laborum ducimus, culpa sit neque molestias dignissimos natus 
              minima sed recusandae ipsa necessitatibus obcaecati vel eligendi voluptatem, provident in non ad saepe veniam 
              eveniet cumque, fugit unde eaque! Doloribus, iusto?
            </p>
          </tab>

          <tab name="list">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
          </tab>

          <tab name="table">
            <table>
              <tr>
                <th>Name</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Cheese</td>
                <td>Yellow</td>
              </tr>
              <tr>
                <td>Apple</td>
                <td>Red</td>
              </tr>
            </table>
          </tab>
        </tabs>

      <tab-content></tab-content>
    </main>

    <app-footer>

    </app-footer>
  </div>
</template>

<script>
  import Header from '@/components/header/Header.vue'
  import Footer from '@/components/footer/Footer.vue'
  import TabContent from '@/components/content/TabContent.vue'
  import Tabs from '@/components/navigation/Tabs.vue'
  import Tab from '@/components/navigation/Tab.vue'

  export default {
    name: 'App',
    components: {
      'app-header' : Header,
      'app-footer' : Footer,
      'tab-content' : TabContent,
      'tab' : Tab,
      'tabs' : Tabs
    }
  }
</script>

<style>
  body {
    background-color: rgb(137, 145, 151);
    color: #fefefe;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 2rem;
    position: relative;
  }
  th, td {
    padding: 5px;
    border: 1px solid #fefefe;
    text-align: center;
  }
</style>
