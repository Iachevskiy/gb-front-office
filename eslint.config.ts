import stylistic from "@stylistic/eslint-plugin";
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs
} from "@vue/eslint-config-typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";

configureVueProject({
  scriptLangs: [
    "ts",
    "tsx"
  ]
});

// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name : "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"]
  },

  {
    name   : "app/files-to-ignore",
    ignores: [
      "**/dist/**",
      "**/dist-ssr/**",
      "**/coverage/**",
      "**/generatedTypes/**"
    ]
  },

  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,

  {
    name   : "app/custom-rules",
    plugins: {
      "@stylistic"        : stylistic,
      "simple-import-sort": simpleImportSort
    },
    rules: {
      semi: [
        "error",
        "always"
      ],
      "no-console": [
        "error",
        {
          allow: [
            "error",
            "info",
            "warn"
          ]
        }
      ],
      "no-trailing-spaces": ["error"],
      "@stylistic/indent" : [
        "error",
        2,
        { SwitchCase: 1 }
      ],

      /* названия для компонентов состоят из нескольких слов */
      "vue/multi-word-component-names": ["error"],

      /* настройка табуляции */
      "vue/html-indent": [
        "error",
        2,
        {
          attribute                : 1,
          baseIndent               : 1,
          closeBracket             : 0,
          alignAttributesVertically: true,
          ignores                  : []
        }
      ],

      /* самозакрывающиеся теги */
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void     : "never",
            normal   : "always",
            component: "always"
          },
          svg : "always",
          math: "always"
        }
      ],

      /* настройка переносов атрибутов в тегах */
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: { max: 1 },
          multiline : { max: 1 }
        }
      ],

      /* пробелы до/после в {{ string }} */
      "vue/mustache-interpolation-spacing": [
        "error",
        "always"
      ],

      /* запрет нескольких пробелов подряд */
      "vue/no-multi-spaces": [
        "error",
        { ignoreProperties: true }
      ],

      /* перенос дочернего тега на новую строку */
      "vue/singleline-html-element-content-newline": [
        "error",
        {
          ignoreWhenNoAttributes: false,
          ignoreWhenEmpty       : false
        }
      ],

      /* запрет v-bind:foo="bar" */
      "vue/v-bind-style": [
        "error",
        "shorthand"
      ],

      /* customEvent как camelCase */
      "vue/v-on-event-hyphenation": [
        "error",
        "never",
        { autofix: true }
      ],

      /* event как shorthand */
      "vue/v-on-style": [
        "error",
        "shorthand"
      ],

      /* порядок аттрибутов компонента */
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            [
              "UNIQUE",
              "SLOT"
            ],
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            "OTHER_ATTR",
            "CONTENT",
            "EVENTS"
          ],
          alphabetical: false
        }
      ],

      /* запрет нескольких template in root */
      "vue/no-lone-template": [
        "error",
        { ignoreAccessible: false }
      ],

      /* запрет использования v-html */
      "vue/no-v-html": ["error"],

      /* порядок и вид секций компонента */
      "vue/block-order": [
        "error",
        {
          order: [
            "template",
            "script[setup]",
            "style:not(scoped)"
          ]
        }
      ],

      /* синтаксис секций */
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
          style : { lang: "scss" }
        }
      ],

      /* блоки на новых строках */
      "vue/block-tag-newline": [
        "error",
        {
          singleline   : "always",
          multiline    : "always",
          maxEmptyLines: 1
        }
      ],

      /* script-setup, composition api */
      "vue/component-api-style": [
        "error",
        [
          "script-setup",
          "composition"
        ]
      ],

      /* emits в camelCase */
      "vue/custom-event-name-casing": [
        "error",
        "camelCase"
      ],

      /* Объявление emits только в синтаксисе type-literal */
      "vue/define-emits-declaration": [
        "error",
        "type-literal"
      ],

      /* Порядок входящих данных внутри script-setup */
      "vue/define-macros-order": [
        "error",
        {
          order: [
            "defineOptions",
            "defineProps",
            "defineEmits",
            "defineSlots",
            "defineModel"
          ],
          defineExposeLast: true
        }
      ],

      /* Объявление props только в синтаксисе type-based */
      "vue/define-props-declaration": [
        "error",
        "runtime"
      ],

      /* Запрещаем scoped и module в секции setup */
      "vue/enforce-style-attribute": [
        "error",
        { allow: ["plain"] }
      ],

      /* пробелы в комментариях(до/после) в секции template */
      "vue/html-comment-content-spacing": [
        "error",
        "always",
        { exceptions: ["*"] }
      ],

      /* табуляция в комментариях в секции template  */
      "vue/html-comment-indent": [
        "error",
        "tab"
      ],

      /* отступ между свойствами объекта, НЕ РАБОТАЕТ (КАК БУДТО ТОЛЬКО ДЛЯ export default) */
      "vue/new-line-between-multi-line-property": [
        "error",
        { minLineOfMultilineProperty: 3 }
      ],

      /* запрещаем пустые секции в компоненте */
      "vue/no-empty-component-block": ["error"],

      /* сообщает об использовании объектов ref, приводящих к потере реактивности значения */
      "vue/no-ref-object-reactivity-loss": ["error"],

      /* запрещает статические инлайн стили */
      "vue/no-static-inline-styles": ["error"],

      /* запрещает использование не зарегистрированных компонентов */
      "vue/no-undef-components": ["error"],

      /* запрещает использование не определённых значений */
      "vue/no-undef-properties": ["error"],

      /* запрещает не использованные emit */
      "vue/no-unused-emit-declarations": ["error"],

      /* запрещает не использованные ref */
      "vue/no-unused-refs": ["error"],

      /* запрещает использование v-for в v-else-if/v-else */
      "vue/no-use-v-else-with-v-for": ["error"],

      /* запрещает использование v-text */
      "vue/no-v-text": ["error"],

      /* требуется пустая строка между блоками */
      "vue/padding-line-between-blocks": [
        "error",
        "always"
      ],

      /* требуется пустая строка между тегами */
      "vue/padding-line-between-tags": [
        "error",
        [
          {
            blankLine: "always",
            prev     : "*",
            next     : "*"
          }
        ]
      ],

      /* Правило направлено на принудительное использование defineOptions вместо экспорта по умолчанию в файлах <script setup> */
      "vue/prefer-define-options": ["error"],

      /* классы в тегах сначала статичные, потом динамические */
      "vue/prefer-separate-static-class": ["error"],

      /* true значение записываем в сокращенной форме */
      "vue/prefer-true-attribute-shorthand": [
        "error",
        "always"
      ],

      /* имена переменных для определенных композиблов */
      "vue/require-macro-variable-name": [
        "error",
        {
          defineProps: "props",
          defineEmits: "emit",
          defineSlots: "slots",
          useSlots   : "slots",
          useAttrs   : "attrs"
        }
      ],

      /* запрещает в проп типизацию как Object */
      "vue/require-typed-object-prop": ["error"],

      /* требует типизацию для ref ( ref<number>() ) */
      "vue/require-typed-ref": ["error"],

      "block-spacing": "error",
      "comma-spacing": [
        "error",
        {
          before: false,
          after : true
        }
      ],
      "@stylistic/function-call-spacing": [
        "error",
        "never"
      ],
      "key-spacing": [
        "error",
        {
          multiLine: {
            beforeColon: false,
            afterColon : true

          },
          align: {
            beforeColon: false,
            afterColon : true
          }
        }
      ],
      "keyword-spacing": [
        "error",
        {
          before: true,
          after : true
        }
      ],
      "object-curly-spacing": [
        "error",
        "always"
      ],
      "space-before-blocks"        : "error",
      "space-before-function-paren": [
        "error",
        "never"
      ],
      "space-infix-ops"                   : "error",
      "@stylistic/type-annotation-spacing": "error",
      "lines-around-comment"              : [
        "error",
        {
          beforeBlockComment: true,
          beforeLineComment : true,
          allowBlockStart   : true,
          allowBlockEnd     : true,
          allowObjectStart  : true,
          allowArrayStart   : true
        }
      ],
      "object-curly-newline": [
        "error",
        {
          ImportDeclaration: {
            multiline    : true,
            minProperties: 3
          },
          ExportDeclaration: "never",
          ObjectExpression : {
            multiline    : true,
            minProperties: 4
          },
          ObjectPattern: {
            multiline    : true,
            minProperties: 4
          }
        }
      ],
      "object-property-newline": "error",
      "brace-style"            : [
        "error",
        "stroustrup",
        { allowSingleLine: true }
      ],
      "no-extra-parens": "error",
      "quote-props"    : [
        "error",
        "as-needed"
      ],
      quotes: [
        "error",
        "double"
      ],
      "comma-dangle": [
        "error",
        "never"
      ],
      "no-extra-semi"        : "error",
      "array-bracket-newline": [
        "error",
        {
          multiline: true,
          minItems : 2
        }
      ],
      "array-bracket-spacing": [
        "error",
        "never"
      ],
      "@stylistic/array-element-newline": [
        "error",
        {
          ArrayExpression: "always",
          ArrayPattern   : "never"
        }
      ],
      "arrow-parens": [
        2,
        "as-needed",
        { requireForBlockBody: true }
      ],
      "arrow-spacing": "error",
      "comma-style"  : [
        "error",
        "last"
      ],
      "computed-property-spacing": [
        "error",
        "never"
      ],
      "dot-location": [
        "error",
        "property"
      ],
      "eol-last": [
        "error",
        "always"
      ],
      "function-call-argument-newline": [
        "error",
        "consistent"
      ],
      "implicit-arrow-linebreak": [
        "error",
        "beside"
      ],
      "line-comment-position": [
        "error",
        { position: "above" }
      ],
      "max-len": [
        "warn",
        {
          code                  : 120,
          ignoreUrls            : true,
          ignoreRegExpLiterals  : true,
          ignoreComments        : true,
          ignoreTrailingComments: true,
          ignoreStrings         : true,
          ignoreTemplateLiterals: true,
          ignorePattern         : "^import .*"
        }
      ],
      "multiline-comment-style": [
        "error",
        "separate-lines"
      ],
      "multiline-ternary": [
        "error",
        "always-multiline"
      ],
      "newline-per-chained-call": [
        "error",
        { ignoreChainWithDepth: 2 }
      ],
      "no-mixed-spaces-and-tabs": "error",
      "no-multiple-empty-lines" : [
        "error",
        {
          max   : 1,
          maxEOF: 0,
          maxBOF: 1
        }
      ],
      "no-tabs"                         : "error",
      "no-whitespace-before-property"   : "error",
      "nonblock-statement-body-position": [
        "error",
        "below"
      ],
      "one-var-declaration-per-line": [
        "error",
        "always"
      ],
      "operator-linebreak": [
        "error",
        "before"
      ],
      "rest-spread-spacing": [
        "error",
        "never"
      ],
      "semi-spacing": "error",
      "semi-style"  : [
        "error",
        "last"
      ],
      "space-in-parens": [
        "error",
        "never"
      ],
      "space-unary-ops"           : "error",
      "switch-colon-spacing"      : "error",
      "template-curly-spacing"    : "error",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            [
              "^fs",
              "^qs",
              "^oidc-client-ts",
              "^node:url",
              "^date-and-time",
              "^lodash",
              "^zod"
            ],
            [
              "^vue",
              "^#app",
              "^pinia",
              "^axios",
              "^@vueuse",
              "^vite",
              "^@vite"
            ],
            [
              "^ant-design-vue",
              "^@ant",
              "^vant"
            ],
            ["^dayjs"],
            ["^icons"],

            ["^FSD/App"],
            ["^FSD/Pages"],
            ["^FSD/Widgets"],
            ["^FSD/Features"],
            ["^FSD/Entities"],

            [
              "^FSD/Shared/Api",
              "^FSD/Shared/Composables",
              "^FSD/Shared/Constants",
              "^FSD/Shared/Types",
              "^FSD/Shared/UI",
              "^FSD/Shared/Utils"
            ],
            [
              "^./",
              "^../"
            ]
          ]
        }
      ],
      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            markers   : ["/"],
            exceptions: [
              "-",
              "+"
            ]
          },
          block: {
            markers   : ["!"],
            exceptions: ["*"],
            balanced  : true
          }
        }
      ],

      /* пробелы между строками */
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev     : "import",
          next     : "expression"
        }
      ]
    }
  }
);
