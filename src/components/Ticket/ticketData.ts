export type TicketItem = {
  name: string;
  price: string | number;
};
/*
<TicketItem name="Overpriced WordPress theme" price={99} />
     
      <li class="flex justify-between">
        <span>Template that doesn't fit your brand</span>
        <span>€199</span>
      </li>
      <li class="flex justify-between">
        <span>SEO plugin that doesn't work</span>
        <span>€49</span>
      </li>
      <li class="flex justify-between">
        <span>Opaque hosting provider</span>
        <span>€79</span>
      </li>
      <li class="flex justify-between">
        <span>Plugin to make it work</span>
        <span>€29</span>
      </li>
      <li class="flex justify-between">
        <span>Freelancer to fix everything</span>
        <span>€299</span>
      </li>
      <li class="flex justify-between">
        <span>Other plugin to fix it (again)</span>
        <span>€29</span>
      </li>
      <li class="flex justify-between">
        <span>Unclear maintenance costs</span>
        <span>€49/month</span>
      </li>
      <li class="flex justify-between">
        <span>Time lost</span>
        <span>too much</span>
      </li>
*/
type Ticket = TicketItem[]

export const ticket: Ticket = [{
  name: "Overpriced WordPress theme",
  price: 99
}, {
  name: "Template that doesn't fit your brand",
  price: 199
}, {
  name: "SEO plugin that doesn't work",
  price: 49
}, {
  name: "Opaque hosting provider",
  price: 79
}, {
  name: "Plugin to make it work",
  price: 29
}, {
  name: "Freelancer to fix everything",
  price: 299
}, {
  name: "Other plugin to fix it (again)",
  price: 29
}, {
  name: "Unclear maintenance costs",
  price: "49€/month"
}, {
  name: "Time lost",
  price: "too much"
}]