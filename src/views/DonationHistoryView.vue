<template>
  <div class="flex flex-col donation-history bg-slate-700 min-h-full">
    <h1 class="text-3xl font-bold text-slate-100 mb-3">
      Donation History
    </h1>
    <table class="bg-slate-700 min-w-full">
      <thead class="bg-slate-800">
        <tr>
          <th class="py-2 px-4 bg-slate-700">Date</th>
          <th class="py-2 px-4 bg-slate-700">Charity</th>
          <th class="py-2 px-4 bg-slate-700">Email/Phone</th>
          <th class="py-2 px-4 bg-slate-700">Method</th>
          <th class="py-2 px-4 bg-slate-700">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="donation in donations"
          :key="donation.id"
          class="bg-gray-100"
        >
          <td class="py-2 px-4">{{ donation.date }}</td>
          <td class="py-2 px-4">{{ donation.charity }}</td>
          <td class="py-2 px-4">{{ donation.contact }}</td>
          <td class="py-2 px-4">{{ donation.method }}</td>
          <td class="py-2 px-4">{{ donation.amount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DonationHistoryView',
  data() {
    return {
      donations: [
        {
          id: 1,
          date: '2022-01-01',
          charity: 'Charity A',
          contact: 'email@example.com',
          method: 'إدفع لي',
          amount: 50,
        },
        {
          id: 2,
          date: '2022-01-05',
          charity: 'Charity B',
          contact: 'phone@example.com',
          method: 'إدفع لي',
          amount: 100,
        },
        {
          id: 3,
          date: '2022-01-10',
          charity: 'Charity C',
          contact: 'phone@example.com',
          method: 'نقدي',
          amount: 25,
        },
        {
          id: 4,
          date: '2022-01-18',
          charity: 'Charity D',
          contact: 'phone@example.com',
          method: 'موبي كاش',
          amount: 45,
        },
      ],
    };
  },
};
</script>

<style scoped>
.donation-history {
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  color: white;
}

.donation-history table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid black;
  margin-bottom: 1rem;
}

.donation-history th,
.donation-history td {
  border-bottom: 1px solid #000000;
  padding: 1.5rem;
  text-align: left;
  vertical-align: top;
}

.donation-history th {
  background-color: #f7fafc;
  font-weight: bold;
  text-align: left;
}

.donation-history tr:nth-child(even) {
  background-color: #dae0e4;
}

table {
  border-collapse: collapse;
  border-color: black;
  color: black;
  width: 100%;
}

tr {
  max-height: 0.5rem;
}
</style>
