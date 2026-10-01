import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Network } from 'lucide-react';
import {
  User, LayoutDashboard, Server, Plug, BrainCircuit, Wrench, Usb,
  Cloud, History, FileSearch, Database, Github, Rocket,
} from 'lucide-react';

const NODES = [
  { id: 'usuario', label: 'USUARIO', Icon: User, moduleId: null,
    desc: 'La persona que usa la aplicación desde el navegador: escribe prompts y recibe respuestas.' },
  { id: 'frontend', label: 'REACT FRONTEND', Icon: LayoutDashboard, moduleId: 'm14',
    desc: 'Interfaz construida con React: captura la entrada del usuario, llama al backend y muestra el resultado.' },
  { id: 'backend', label: 'BACKEND', Icon: Server, moduleId: 'm14',
    desc: 'Servidor que valida las peticiones, guarda la API key a salvo y orquesta la lógica de la app.' },
  { id: 'api', label: 'AI API', Icon: Plug, moduleId: 'm17',
    desc: 'Endpoint HTTP del proveedor de IA: recibe el JSON con el prompt y devuelve los tokens generados.' },
  { id: 'llm', label: 'LLM', Icon: BrainCircuit, moduleId: 'm2',
    desc: 'El modelo de lenguaje: predice el siguiente token una y otra vez hasta completar la respuesta.' },
  { id: 'tools', label: 'TOOLS', Icon: Wrench, moduleId: 'm7',
    desc: 'Funciones que el agente puede invocar: consultar el clima, calcular, buscar en la web.' },
  { id: 'mcp', label: 'MCP', Icon: Usb, moduleId: 'm9',
    desc: 'Protocolo estándar (el «USB-C» de la IA) para conectar herramientas externas con un solo conector.' },
  { id: 'servicios', label: 'SERVICIOS', Icon: Cloud, moduleId: null,
    desc: 'APIs externas de terceros: clima, mapas, correo, pagos... accesibles vía tools o MCP.' },
  { id: 'memoria', label: 'MEMORIA', Icon: History, moduleId: 'm6',
    desc: 'Historial de la conversación que se reinyecta como contexto para que el modelo «recuerde».' },
  { id: 'rag', label: 'RAG', Icon: FileSearch, moduleId: 'm21',
    desc: 'Recupera fragmentos de tus documentos y los añade al prompt para responder con tus datos.' },
  { id: 'database', label: 'BASE DE DATOS', Icon: Database, moduleId: 'm17',
    desc: 'Almacena usuarios, sesiones, embeddings y resultados de forma persistente.' },
  { id: 'github', label: 'GITHUB', Icon: Github, moduleId: 'm23',
    desc: 'Repositorio del código fuente con control de versiones y despliegue continuo.' },
  { id: 'vercel', label: 'VERCEL', Icon: Rocket, moduleId: 'm25',
    desc: 'Plataforma donde se despliegan el frontend y el backend para que sean accesibles en internet.' },
];

const MAIN_CHAIN = ['usuario', 'frontend', 'backend', 'api', 'llm'];

export function ArchitectureExplorer() {
  const [selected, setSelected] = useState(NODES[0]);
  const { Icon } = selected;

  return (
    <div>
      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title"><Network size={18} /> Explorador de arquitectura</h3>
        <p className="card-sub">
          Pulsa cada pieza para ver qué papel juega en el sistema. Las piezas con módulo enlazan
          a su explicación completa.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '0.6rem',
            marginTop: '1rem',
          }}
        >
          {NODES.map((n) => {
            const NIcon = n.Icon;
            const active = selected.id === n.id;
            return (
              <button
                key={n.id}
                onClick={() => setSelected(n)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.8rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: active ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: active ? 'var(--primary-soft)' : 'var(--bg-raised)',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  color: 'var(--text)',
                  textAlign: 'center',
                }}
              >
                <NIcon size={22} />
                {n.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 className="card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Icon size={20} /> {selected.label}
        </h3>
        <p style={{ marginTop: '0.5rem' }}>{selected.desc}</p>
        {selected.moduleId ? (
          <Link to={`/modulo/${selected.moduleId}`} className="btn btn-primary" style={{ marginTop: '0.75rem', display: 'inline-flex', alignItems: 'center' }}>
            Ver módulo
          </Link>
        ) : (
          <span className="badge badge-muted" style={{ marginTop: '0.75rem', display: 'inline-block' }}>
            Sin módulo asociado
          </span>
        )}
      </div>

      <div className="card">
        <h3 className="card-title">Cadena principal de una petición</h3>
        <div className="flow">
          {MAIN_CHAIN.map((id, i) => {
            const n = NODES.find((x) => x.id === id);
            return (
              <div key={id}>
                <div className="flow-node">
                  <div className="fn-label">{n.label}</div>
                  <div className="fn-desc">{n.desc}</div>
                </div>
                {i < MAIN_CHAIN.length - 1 && (
                  <div className="flow-arrow"><ArrowDown size={18} /></div>
                )}
              </div>
            );
          })}
        </div>
        <p className="card-sub">
          Las piezas laterales (tools, MCP, memoria, RAG, base de datos, servicios) se conectan
          al backend o al LLM según lo necesite cada petición; GitHub y Vercel sostienen el ciclo
          de desarrollo y despliegue.
        </p>
      </div>
    </div>
  );
}
