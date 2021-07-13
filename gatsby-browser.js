/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import './src/styles/site.scss'
import 'bootstrap/dist/js/bootstrap.bundle'

const videoModal = document.getElementById('videoModal')

videoModal.addEventListener('show.bs.modal', evnt => {
  const videoUrl = evnt.relatedTarget.href
  const iFrame = evnt.target.getElementsByTagName('iframe')[0]
  iFrame.src = `${videoUrl}?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1`
})

videoModal.addEventListener('hide.bs.modal', evnt => {
  const iFrame = evnt.target.getElementsByTagName('iframe')[0]
  iFrame.src = '#'
})
