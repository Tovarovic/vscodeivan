package com.Conciliacion.Movimiento;

import java.math.BigDecimal;
import java.time.LocalDate;

public class MovimientoPayway {

    private LocalDate fecha;
    private int terminal;
    private int cupon;
    private boolean aprobado;
    private BigDecimal montoBruto;
    private BigDecimal montoNeto;

    public MovimientoPayway(LocalDate fecha, int terminal,int cupon, boolean aprobado, BigDecimal montoBruto,
            BigDecimal montoNeto) {

        if (fecha == null) {
            throw new IllegalArgumentException("La fecha no puede ser nula");
        }

        if (terminal <= 0) {
            throw new IllegalArgumentException("El número de terminal debe ser mayor que cero");
        }

        if (cupon <= 0) {
            throw new IllegalArgumentException("El número de cupón debe ser mayor que cero");
        }

        if (montoBruto == null || montoBruto.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("El monto bruto no puede ser nulo o negativo");
        }

        if (montoNeto == null || montoNeto.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("El monto neto no puede ser nulo o negativo");
        }

        if (montoNeto.compareTo(montoBruto) > 0) {
            throw new IllegalArgumentException("El monto neto no puede ser mayor al monto bruto.");
        }

        this.fecha = fecha;
        this.terminal = terminal;
        this.cupon = cupon;
        this.aprobado = aprobado;
        this.montoBruto = montoBruto;
        this.montoNeto = montoNeto;
    }

    public LocalDate getFecha() { return fecha; }
    public int getTerminal() { return terminal; }
    public int getCupon() { return cupon; }
    public boolean isAprobado() { return aprobado; }
    public BigDecimal getMontoBruto() { return montoBruto; }
    public BigDecimal getMontoNeto() { return montoNeto; }

    @Override
    public String toString() {
        return "MovimientoPayway{" +
                "fecha=" + fecha +
                ", terminal='" + terminal + '\'' +
                ", cupon='" + cupon + '\'' +
                ", aprobado=" + aprobado +
                ", neto=" + montoNeto +
                '}';
    }

}