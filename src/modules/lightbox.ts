import VueEasyLightbox from 'vue-easy-lightbox'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, app }) => {
  if (isClient)
    app.use(VueEasyLightbox)
}
