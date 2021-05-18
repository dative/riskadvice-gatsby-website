export const RichTextContent = /* html */ `
<h1>Testing display of HTML elements</h1>

<h2>This is 2nd level heading</h2>
<p>This is a test paragraph.</p>
<h3>This is 3rd level heading</h3>
<p>This is a test paragraph.</p>
<h4>This is 4th level heading</h4>
<p>This is a test paragraph.</p>
<h5>This is 5th level heading</h5>
<p>This is a test paragraph.</p>
<h6>This is 6th level heading</h6>
<p>This is a test paragraph.</p>

<h2>Basic block level elements</h2>

<p>This is a normal paragraph (<code>p</code> element).
To add some length to it, let us mention that this page was
primarily written for testing the effect of <strong>user style sheets</strong>.
You can use it for various other purposes as well, like just checking how
your browser displays various HTML elements by default.
It can also be useful when testing conversions from HTML
format to other formats, since some elements can go wrong then.</p>
<p>This is another paragraph. I think it needs to be added that
the set of elements tested is not exhaustive in any sense. I have selected
those elements for which it can make sense to write user style sheet rules,
in my opionion.</p>

<blockquote><p>This is a block quotation containing a single
paragraph. Well, not quite, since this is not <em>really</em>
quoted text, but I hope you understand the point. After all, this
page does not use HTML markup very normally anyway.</p><cite>Some Author</cite></blockquote>
`

const fibContent = /* html */ `
  <p>
  Is it a Good Idea to Take Your College
  <br />
  Child Off Your Auto Insurance Policy?
  </p>
`

export const FeatureImageBlockContent = {
  videoUrl: 'https://www.youtube.com/embed/-NAhnxRdMuQ',
  content: fibContent,
}

export const IconGridBlockContent = [
  {
    icon: 'car-bump.svg',
    title: 'Accidenta Damage',
    content: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
  {
    icon: 'car-bump.svg',
    title: 'Uninsured Drivers',
    content: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
  {
    icon: 'car-bump.svg',
    title: 'Rental Vehicles',
    content: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
  {
    icon: 'car-bump.svg',
    title: 'Roadside Assitance',
    content: 'Donec ullamcorper nulla non metus auctor fringilla.',
  },
]

export const AccordionBlockContent = [
  {
    question: 'What is a Minimum Compulsory Limit?',
    answer:
      '<p>Sint irure ea nisi magna aute proident. Est reprehenderit tempor ipsum ut cillum adipisicing ullamco non ea nostrud irure. Eiusmod dolor excepteur tempor id velit fugiat. Excepteur aute culpa elit commodo reprehenderit labore fugiat sint esse laboris adipisicing dolore deserunt irure. Aute exercitation fugiat quis anim aliqua nulla officia.</p>',
  },
  {
    question: 'Should I take my child off my policy when they leave for college?',
    answer:
      '<p>Sint irure ea nisi magna aute proident. Est reprehenderit tempor ipsum ut cillum adipisicing ullamco non ea nostrud irure. Eiusmod dolor excepteur tempor id velit fugiat. Excepteur aute culpa elit commodo reprehenderit labore fugiat sint esse laboris adipisicing dolore deserunt irure. Aute exercitation fugiat quis anim aliqua nulla officia.</p>',
  },
  {
    question: 'What if another question is here?',
    answer:
      '<p>Aliquip sit anim enim aute nulla voluptate proident aliquip commodo proident veniam. Minim qui exercitation qui nisi exercitation veniam pariatur. Exercitation ad fugiat sint est aliqua enim.</p><p>Dolore dolore ullamco minim adipisicing. Fugiat dolor qui sint voluptate. Sint aliquip culpa laborum elit consequat anim quis mollit incididunt est pariatur. Consequat veniam elit eu aute voluptate occaecat et ad laboris officia incididunt. Esse sit commodo sit voluptate velit adipisicing minim.</p>',
  },
]
