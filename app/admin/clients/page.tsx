'use client';

import { useQuery, useMutation } from "convex/react";
import Link from 'next/link';
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Image from 'next/image';

export default function AdminClients() {
  const clients = useQuery(api.clients.getClients);
  const deleteClient = useMutation(api.clients.deleteClient);

  const handleDelete = async (id: string) => {
    await deleteClient({ id: id as unknown as Id<"clients"> });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Link href="/admin/clients/add-clients">
          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 py-2 rounded-full transition">
            Add New Client
          </button>
        </Link>
      </div>
      {clients === undefined ? (
        <div>Loading...</div>
      ) : clients.length === 0 ? (
        <div>No clients found. Add some clients to get started.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <div key={client._id} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <div className="relative w-full h-40 mb-4">
                {client.logoUrl ? (
                  <img 
                    src={client.logoUrl} 
                    alt={`${client.name} logo`} 
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    No Logo
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{client.name}</h3>
              <button
                onClick={() => handleDelete(client._id)}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}