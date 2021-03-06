export const navAll = `ul
  li(class=(reference === "index" ? "active" : undefined))
    a(href="index.html") Lorem Impsum
  li(class=(reference === "dolor" ? "active" : undefined))
    a(href="dolor.html") Dolor Sit
  li(class=(reference === "neo" ? "active" : undefined))
    a(href="neo.html") Neo
  li
    div Dolore Magna
    ul
      li(class=(reference === "amet" ? "active" : undefined))
        a(href="amet.html") Amet Consetetur
      li(class=(reference === "sadipsicng" ? "active" : undefined))
        a(href="sadipsicng.html") Sadipscing Elitr
      li(class=(reference === "sed" ? "active" : undefined))
        a(href="sed.html") Sed Diam
      li(class=(reference === "nonumy" ? "active" : undefined))
        a(href="nonumy.html") Nonumy Eirmod
      li(class=(reference === "tempor" ? "active" : undefined))
        a(href="tempor.html") Tempor
      li(class=(reference === "invidunt" ? "active" : undefined))
        a(href="invidunt.html") Invidunt ut Labore
  li
    div At vero
    ul
      li(class=(reference === "aliquyam" ? "active" : undefined))
        a(href="aliquyam.html") Aliquyam
      li(class=(reference === "erat" ? "active" : undefined))
        a(href="erat.html") Erat Set Diam
      li(class=(reference === "voluptua" ? "active" : undefined))
        a(href="voluptua.html") Voluptua
  li(class=(reference === "eos-et-accusamus" ? "active" : undefined))
    a(href="eos-et-accusamus.html") Eos et Accusamus
  li(class=(reference === "iusto dignissimos" ? "active" : undefined))
    a(href="iusto dignissimos.html") Iusto Dignissimos
  li(class=(reference === "corrupti-quos-dolores" ? "active" : undefined))
    a(href="corrupti-quos-dolores.html") Corrupti quos Dolores
  li
    a(href="quibusdam.html") Quibusdam
    ul
      li(class=(reference === "voluptatibus" ? "active" : undefined))
        a(href="voluptatibus.html") Voluptatibus
      li(class=(reference === "denounce" ? "active" : undefined))
        a(href="denounce.html") Denounce
      li(class=(reference === "molestias-excepturi" ? "active" : undefined))
        a(href="molestias-excepturi.html") Molestias Excepturi
  li(class=(reference === "rerum" ? "active" : undefined))
    a(href="rerum.html") Rerum
  li(class=(reference === "sapiente" ? "active" : undefined))
    a(href="sapiente.html") Sapiente
  li
    div Earum
    ul
      li(class=(reference === "foo_1-recusandae" ? "active" : undefined))
        a(href="foo_1-recusandae.html") Recusandae
      li(class=(reference === "bar_2-impedit-quo-minus-id" ? "active" : undefined))
        a(href="bar_2-impedit-quo-minus-id.html") Impedit quo minus id
      li(class=(reference === "baz_3-rerum-hic" ? "active" : undefined))
        a(href="baz_3-rerum-hic.html") Rerum Hic`;

export const navTop = `ul
  li(class=(reference === "dolor" ? "active" : undefined))
    a(href="dolor.html") Dolor Sit
  li(class=(reference === "neo" ? "active" : undefined))
    a(href="neo.html") Neo
  li.dropdown
    a(href="#") Dolore Magna
    ul
      li(class=(reference === "amet" ? "active" : undefined))
        a(href="amet.html") Amet Consetetur
      li(class=(reference === "sadipsicng" ? "active" : undefined))
        a(href="sadipsicng.html") Sadipscing Elitr
      li(class=(reference === "sed" ? "active" : undefined))
        a(href="sed.html") Sed Diam
      li(class=(reference === "nonumy" ? "active" : undefined))
        a(href="nonumy.html") Nonumy Eirmod
      li(class=(reference === "tempor" ? "active" : undefined))
        a(href="tempor.html") Tempor
      li(class=(reference === "invidunt" ? "active" : undefined))
        a(href="invidunt.html") Invidunt ut Labore
  li.dropdown
    a(href="#") At vero
    ul
      li(class=(reference === "aliquyam" ? "active" : undefined))
        a(href="aliquyam.html") Aliquyam
      li(class=(reference === "erat" ? "active" : undefined))
        a(href="erat.html") Erat Set Diam
      li(class=(reference === "voluptua" ? "active" : undefined))
        a(href="voluptua.html") Voluptua
  li(class=(reference === "eos-et-accusamus" ? "active" : undefined))
    a(href="eos-et-accusamus.html") Eos et Accusamus
  li(class=(reference === "iusto dignissimos" ? "active" : undefined))
    a(href="iusto dignissimos.html") Iusto Dignissimos
  li(class=(reference === "corrupti-quos-dolores" ? "active" : undefined))
    a(href="corrupti-quos-dolores.html") Corrupti quos Dolores`;

export const navFooter = `ul
  li(class=(reference === "quibusdam" ? "active" : undefined))
    a(href="quibusdam.html") Quibusdam
  li(class=(reference === "rerum" ? "active" : undefined))
    a(href="rerum.html") Rerum
  li(class=(reference === "sapiente" ? "active" : undefined))
    a(href="sapiente.html") Sapiente`;

export const navBreadcrumbs = [
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Dolor Sit</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Neo</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Dolore Magna</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Amet Consetetur</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Dolore Magna</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Sadipscing Elitr</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Dolore Magna</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Sed Diam</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Dolore Magna</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Nonumy Eirmod</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Dolore Magna</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Tempor</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Dolore Magna</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Invidunt ut Labore</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">At vero</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Aliquyam</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">At vero</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Erat Set Diam</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">At vero</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Voluptua</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Eos et Accusamus</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Iusto Dignissimos</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Corrupti quos Dolores</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="quibusdam.html"><span itemprop="name">Quibusdam</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Voluptatibus</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="quibusdam.html"><span itemprop="name">Quibusdam</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Denounce</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="quibusdam.html"><span itemprop="name">Quibusdam</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Molestias Excepturi</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Quibusdam</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Rerum</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Sapiente</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Earum</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Recusandae</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Earum</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Impedit quo minus id</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="#"><span itemprop="name">Earum</span><meta itemprop="position" content="2"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Rerum Hic</span><meta itemprop="position" content="3"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Page not found!</span><meta itemprop="position" content="2"/></li></ol>',
    '<ol class="breadcrumb" itemprop="breadcrumb" itemscope="itemscope" itemtype="http://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><a itemprop="item" href="index.html"><span itemprop="name">Start</span><meta itemprop="position" content="1"/></a></li><li class="active" itemprop="itemListElement" itemscope="itemscope" itemtype="http://schema.org/ListItem"><span itemprop="name">Unauthorized!</span><meta itemprop="position" content="2"/></li></ol>'
];
