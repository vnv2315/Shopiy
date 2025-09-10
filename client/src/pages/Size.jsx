import React from 'react'

function Size() {
  return (
    <div class="p-4 sm:p-8">

    <div class="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-700">
        <h1 class="text-3xl sm:text-4xl font-bold text-center mb-2 text-white">Size Chart Guide</h1>
        <p class="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size chart. All measurements are approximate. We recommend measuring yourself to ensure the best possible fit.
        </p>

        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4 text-white">Men's Apparel</h2>

            <div class="mb-8">
                <h3 class="text-xl font-medium mb-3 text-gray-300">Upper Wear (Shirts, T-Shirts, Jackets)</h3>
                <div class="table-container bg-gray-700 rounded-lg shadow-inner">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead class="text-xs text-gray-200 uppercase bg-gray-900 rounded-t-lg">
                            <tr>
                                <th scope="col" class="py-3 px-6 rounded-tl-lg">Size</th>
                                <th scope="col" class="py-3 px-6">Chest (in)</th>
                                <th scope="col" class="py-3 px-6">Chest (cm)</th>
                                <th scope="col" class="py-3 px-6">Waist (in)</th>
                                <th scope="col" class="py-3 px-6">Waist (cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">S</th>
                                <td class="py-4 px-6">34-36</td>
                                <td class="py-4 px-6">86-91</td>
                                <td class="py-4 px-6">28-30</td>
                                <td class="py-4 px-6">71-76</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">M</th>
                                <td class="py-4 px-6">38-40</td>
                                <td class="py-4 px-6">96-101</td>
                                <td class="py-4 px-6">32-34</td>
                                <td class="py-4 px-6">81-86</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">L</th>
                                <td class="py-4 px-6">42-44</td>
                                <td class="py-4 px-6">106-111</td>
                                <td class="py-4 px-6">36-38</td>
                                <td class="py-4 px-6">91-96</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">XL</th>
                                <td class="py-4 px-6">46-48</td>
                                <td class="py-4 px-6">116-121</td>
                                <td class="py-4 px-6">40-42</td>
                                <td class="py-4 px-6">101-106</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-medium mb-3 text-gray-300">Lower Wear (Pants, Trousers, Jeans)</h3>
                <div class="table-container bg-gray-700 rounded-lg shadow-inner">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead class="text-xs text-gray-200 uppercase bg-gray-900">
                            <tr>
                                <th scope="col" class="py-3 px-6 rounded-tl-lg">Size</th>
                                <th scope="col" class="py-3 px-6">Waist (in)</th>
                                <th scope="col" class="py-3 px-6">Waist (cm)</th>
                                <th scope="col" class="py-3 px-6">Inseam (in)</th>
                                <th scope="col" class="py-3 px-6">Inseam (cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">S (28-30)</th>
                                <td class="py-4 px-6">28-30</td>
                                <td class="py-4 px-6">71-76</td>
                                <td class="py-4 px-6">30-32</td>
                                <td class="py-4 px-6">76-81</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">M (32-34)</th>
                                <td class="py-4 px-6">32-34</td>
                                <td class="py-4 px-6">81-86</td>
                                <td class="py-4 px-6">32-34</td>
                                <td class="py-4 px-6">81-86</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">L (36-38)</th>
                                <td class="py-4 px-6">36-38</td>
                                <td class="py-4 px-6">91-96</td>
                                <td class="py-4 px-6">34-36</td>
                                <td class="py-4 px-6">86-91</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">XL (40-42)</th>
                                <td class="py-4 px-6">40-42</td>
                                <td class="py-4 px-6">101-106</td>
                                <td class="py-4 px-6">34-36</td>
                                <td class="py-4 px-6">86-91</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-semibold mb-4 text-white">Women's Apparel</h2>

            <div class="mb-8">
                <h3 class="text-xl font-medium mb-3 text-gray-300">Upper Wear (Tops, Blouses, Dresses)</h3>
                <div class="table-container bg-gray-700 rounded-lg shadow-inner">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead class="text-xs text-gray-200 uppercase bg-gray-900">
                            <tr>
                                <th scope="col" class="py-3 px-6 rounded-tl-lg">Size (US)</th>
                                <th scope="col" class="py-3 px-6">Bust (in)</th>
                                <th scope="col" class="py-3 px-6">Bust (cm)</th>
                                <th scope="col" class="py-3 px-6">Waist (in)</th>
                                <th scope="col" class="py-3 px-6">Waist (cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">XS (0-2)</th>
                                <td class="py-4 px-6">32-34</td>
                                <td class="py-4 px-6">81-86</td>
                                <td class="py-4 px-6">24-26</td>
                                <td class="py-4 px-6">61-66</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">S (4-6)</th>
                                <td class="py-4 px-6">35-36</td>
                                <td class="py-4 px-6">89-91</td>
                                <td class="py-4 px-6">27-28</td>
                                <td class="py-4 px-6">69-71</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">M (8-10)</th>
                                <td class="py-4 px-6">37-38</td>
                                <td class="py-4 px-6">94-97</td>
                                <td class="py-4 px-6">29-30</td>
                                <td class="py-4 px-6">74-76</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">L (12-14)</th>
                                <td class="py-4 px-6">39-41</td>
                                <td class="py-4 px-6">99-104</td>
                                <td class="py-4 px-6">31-33</td>
                                <td class="py-4 px-6">79-84</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-medium mb-3 text-gray-300">Lower Wear (Pants, Skirts, Shorts)</h3>
                <div class="table-container bg-gray-700 rounded-lg shadow-inner">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                        <thead class="text-xs text-gray-200 uppercase bg-gray-900">
                            <tr>
                                <th scope="col" class="py-3 px-6 rounded-tl-lg">Size (US)</th>
                                <th scope="col" class="py-3 px-6">Waist (in)</th>
                                <th scope="col" class="py-3 px-6">Waist (cm)</th>
                                <th scope="col" class="py-3 px-6">Hip (in)</th>
                                <th scope="col" class="py-3 px-6">Hip (cm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">XS (0-2)</th>
                                <td class="py-4 px-6">24-26</td>
                                <td class="py-4 px-6">61-66</td>
                                <td class="py-4 px-6">34-36</td>
                                <td class="py-4 px-6">86-91</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">S (4-6)</th>
                                <td class="py-4 px-6">27-28</td>
                                <td class="py-4 px-6">69-71</td>
                                <td class="py-4 px-6">37-38</td>
                                <td class="py-4 px-6">94-97</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">M (8-10)</th>
                                <td class="py-4 px-6">29-30</td>
                                <td class="py-4 px-6">74-76</td>
                                <td class="py-4 px-6">39-40</td>
                                <td class="py-4 px-6">99-102</td>
                            </tr>
                            <tr class="bg-gray-800 border-b border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">L (12-14)</th>
                                <td class="py-4 px-6">31-33</td>
                                <td class="py-4 px-6">79-84</td>
                                <td class="py-4 px-6">41-43</td>
                                <td class="py-4 px-6">104-109</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section>
            <h2 class="text-2xl font-semibold mb-4 text-white">Kids' Apparel (By Age)</h2>

            <div class="table-container bg-gray-700 rounded-lg shadow-inner">
                <table class="w-full text-sm text-left rtl:text-right text-gray-300">
                    <thead class="text-xs text-gray-200 uppercase bg-gray-900">
                        <tr>
                            <th scope="col" class="py-3 px-6 rounded-tl-lg">Size</th>
                            <th scope="col" class="py-3 px-6">Approx. Age</th>
                            <th scope="col" class="py-3 px-6">Height (in)</th>
                            <th scope="col" class="py-3 px-6">Height (cm)</th>
                            <th scope="col" class="py-3 px-6">Weight (lbs)</th>
                            <th scope="col" class="py-3 px-6">Weight (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-800 border-b border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">2T</th>
                            <td class="py-4 px-6">2 years</td>
                            <td class="py-4 px-6">33-36</td>
                            <td class="py-4 px-6">84-91</td>
                            <td class="py-4 px-6">26-29</td>
                            <td class="py-4 px-6">12-13</td>
                        </tr>
                        <tr class="bg-gray-800 border-b border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">3T</th>
                            <td class="py-4 px-6">3 years</td>
                            <td class="py-4 px-6">36-39</td>
                            <td class="py-4 px-6">91-99</td>
                            <td class="py-4 px-6">29-32</td>
                            <td class="py-4 px-6">13-15</td>
                        </tr>
                        <tr class="bg-gray-800 border-b border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">4T</th>
                            <td class="py-4 px-6">4 years</td>
                            <td class="py-4 px-6">39-42</td>
                            <td class="py-4 px-6">99-107</td>
                            <td class="py-4 px-6">32-35</td>
                            <td class="py-4 px-6">15-16</td>
                        </tr>
                        <tr class="bg-gray-800 border-b border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">S (5-6)</th>
                            <td class="py-4 px-6">5-6 years</td>
                            <td class="py-4 px-6">42-45</td>
                            <td class="py-4 px-6">107-114</td>
                            <td class="py-4 px-6">35-45</td>
                            <td class="py-4 px-6">16-20</td>
                        </tr>
                        <tr class="bg-gray-800 border-b border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">M (7-8)</th>
                            <td class="py-4 px-6">7-8 years</td>
                            <td class="py-4 px-6">48-52</td>
                            <td class="py-4 px-6">122-132</td>
                            <td class="py-4 px-6">50-60</td>
                            <td class="py-4 px-6">23-27</td>
                        </tr>
                        <tr class="bg-gray-800 border-b border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-white whitespace-nowrap">L (10-12)</th>
                            <td class="py-4 px-6">10-12 years</td>
                            <td class="py-4 px-6">54-58</td>
                            <td class="py-4 px-6">137-147</td>
                            <td class="py-4 px-6">70-85</td>
                            <td class="py-4 px-6">32-39</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <p class="text-xs text-center text-gray-500 mt-8">
            Please note: This chart provides general guidelines. Sizing may vary by brand, fit, and style.
            For an accurate fit, always check the specific product's sizing details if available.
        </p>
    </div>

</div>

  )
}

export default Size
