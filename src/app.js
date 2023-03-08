import { data } from './api/mock'

//Sidebar
;(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  )
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

window.addEventListener('load', () => {
  const table = $('#example').DataTable({
    pageLength: 20,
    data: data,
    columns: [
      { data: 'data' },
      { data: 'nome' },
      { data: 'codice' },
      { data: 'comune' },
      { data: 'indirizzo' },
      { data: 'prov' },
      { data: 'icon1' },
      { data: 'icon2' },
      { data: 'icon3' },
      { data: 'icon4' },
      { data: 'icon5' },
      { data: 'icon6' },
      { data: 'icon7' },
      { data: 'icon8' },
    ],
  })

  table.columns.adjust.draw()
})
