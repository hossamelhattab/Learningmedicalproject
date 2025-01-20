import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <div className="bg-red-400 mt-32">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum enim imperdiet, sodales nibh eu, ultrices arcu. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aenean finibus risus libero, at tristique ante bibendum ac.
          Duis blandit ac lectus sed rutrum. Proin accumsan suscipit nisi eu
          sodales. Nunc pulvinar leo vel eleifend tincidunt. Nullam ac eros nec
          augue euismod vulputate accumsan non urna. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean posuere velit eu ante dictum, nec
          aliquet lectus eleifend. Nunc molestie pellentesque dui eu euismod.
          Aliquam erat volutpat. Donec auctor elementum purus ut tristique. In
          nec dolor urna. Cras a rhoncus libero. Mauris faucibus mauris ut
          aliquet pharetra. Ut orci dui, tincidunt a finibus ac, mattis sed
          nunc. Praesent placerat urna in posuere feugiat. Mauris mollis orci
          sed diam ultricies, ut semper lacus tincidunt. In blandit egestas
          tortor. Sed at lacus leo. In ac enim a ligula sodales tempor. Sed
          molestie placerat lorem ac mollis. Vivamus id quam at magna semper
          ultrices ac ut est. Ut quis sapien urna. Ut bibendum, enim et
          fringilla rutrum, nisi turpis pretium ante, eget venenatis nisl lorem
          id lectus. Cras finibus ex at est rutrum pulvinar. Vivamus porttitor
          est sit amet nunc feugiat, in sollicitudin urna luctus. Maecenas
          finibus urna eget elit semper congue sed id lectus. Duis non est
          maximus, porta mi a, imperdiet nulla. Donec nec vulputate quam. Nam
          sed venenatis justo. Nam mi lorem, viverra vitae vestibulum ac, tempor
          laoreet tellus. Aliquam vulputate, urna quis pellentesque gravida, dui
          nisi fermentum velit, nec pharetra arcu mauris ut nulla. Donec eu
          efficitur odio. Curabitur facilisis tellus eget ligula tincidunt, et
          rutrum quam fringilla. Morbi a porta libero. Aenean volutpat in justo
          in finibus. Aenean id eleifend augue, quis laoreet est. Sed lacinia
          ante at leo luctus, vel blandit ex porta. Quisque sit amet luctus sem.
          Mauris id blandit magna. Donec nec ligula viverra metus ultricies
          imperdiet. Fusce blandit aliquam condimentum. Aliquam aliquet est
          turpis, quis iaculis magna porta et. In hac habitasse platea dictumst.
          Praesent justo orci, sagittis posuere augue consectetur, dictum dictum
          justo. Sed eget mattis urna, tristique consectetur nulla. Nam a
          laoreet tortor, id commodo sapien. Sed maximus lobortis consequat.
        </p>
        <ul>
          {Array(100)
            .fill(0)
            .map((_, i) => (
              <li key={i}>Item</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
