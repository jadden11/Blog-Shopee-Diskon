const Product = () => {
  return (
    <div class="flex font-sans">
      <div class="flex-none w-48 relative">
        <img
          src="https://down-id.img.susercontent.com/file/id-11134207-7rasf-m16tnem5bfgi3a@resize_w450_nl.webp"
          alt=""
          class="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-lg font-semibold text-slate-900">
            Utility Jacket
          </h1>
          <div class="text-lg font-semibold text-slate-500">$110.00</div>
          <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            In stock
          </div>
        </div>
        <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
        <div class="flex space-x-4 mb-6 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
            <button
              class="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              Buy now
            </button>
            <button
              class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
            type="button"
            aria-label="Like"
          >
            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p class="text-sm text-slate-700">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
};

export default Product;
